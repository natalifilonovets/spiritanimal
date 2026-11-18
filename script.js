'use strict';

const quiz = document.querySelector('#quiz');
const startScreen = quiz.innerHTML;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const portraits = new Map();

let rounds = [];
let answers = [];
let index = 0;
let locked = false;

function shuffled(options) {
  const copy = [...options];
  for (let trailing = copy.length - 1; trailing > 0; trailing--) {
    const other = Math.floor(Math.random() * (trailing + 1));
    [copy[trailing], copy[other]] = [copy[other], copy[trailing]];
  }
  return copy;
}

function score(selections) {
  const totals = Object.fromEntries(Object.keys(animals).map(animal => [animal, 0]));
  for (const selection of selections) {
    if (selection) totals[selection.animal]++;
  }
  const highest = Math.max(...Object.values(totals));
  return [...selections].reverse().find(selection => selection &&
    totals[selection.animal] === highest)?.animal;
}

function portraitPath(animal) {
  return './assets/animals/' + animal + '.png';
}

function begin() {
  rounds = questions.map(question => ({ ...question, options: shuffled(question.options) }));
  answers = Array(rounds.length).fill(null);
  index = 0;
  locked = false;

  for (const animal of Object.keys(animals)) {
    if (portraits.has(animal)) continue;
    const portrait = new Image();
    portrait.src = portraitPath(animal);
    portraits.set(animal, portrait);
  }
  showQuestion();
}

function show(markup) {
  quiz.innerHTML = markup;
  quiz.querySelector('h1').focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function showQuestion() {
  const round = rounds[index];
  const number = String(index + 1).padStart(2, '0');
  const options = round.options.map((option, position) =>
    `<button type="button" class="option" data-option="${position}" aria-pressed="${answers[index] === option}">
      <span class="letter" aria-hidden="true">${'ABCD'[position]}</span>
      <span>${option.label}</span>
    </button>`
  ).join('');

  show(`<section class="panel question">
    <p class="eyebrow">Question ${number} / ${rounds.length}</p>
    <progress value="${index + 1}" max="${rounds.length}" aria-label="Quiz progress"></progress>
    <h1 id="question-title" tabindex="-1">${round.title}</h1>
    <div class="options" role="group" aria-labelledby="question-title">${options}</div>
    <button type="button" class="secondary" id="back" ${index === 0 ? 'disabled' : ''}>Back</button>
  </section>`);
}

function choose(button) {
  if (locked) return;
  locked = true;
  answers[index] = rounds[index].options[Number(button.dataset.option)];

  for (const option of quiz.querySelectorAll('.option')) {
    option.setAttribute('aria-pressed', String(option === button));
    option.setAttribute('aria-disabled', 'true');
  }
  quiz.querySelector('#back').disabled = true;

  setTimeout(() => {
    if (index + 1 === rounds.length) {
      reveal(score(answers));
      return;
    }
    index++;
    locked = false;
    showQuestion();
  }, reducedMotion.matches ? 0 : 500);
}

async function reveal(animal) {
  show(`<section class="panel reveal">
    <div class="halo" aria-hidden="true"><span>✦</span></div>
    <h1 tabindex="-1">Your stars are ready...</h1>
  </section>`);

  await Promise.all([
    new Promise(resolve => setTimeout(resolve, reducedMotion.matches ? 0 : 1050)),
    portraits.get(animal).decode().catch(() => {})
  ]);

  const result = animals[animal];
  const speakingName = result.name.toLowerCase().replace(/^the /, '');
  show(`<section class="panel result">
    <figure class="portrait">
      <img src="${portraitPath(animal)}" alt="${result.alt}" width="1254" height="1254">
    </figure>
    <div class="result-copy">
      <p class="eyebrow">Your cosmic animal is...</p>
      <h1 tabindex="-1">${result.name}</h1>
      <p class="traits">${result.traits}</p>
      <p class="description">${result.description}</p>
      <p class="star-message">${result.starMessage}</p>
      <div class="mission">
        <h2>Your English Mission</h2>
        <p>Do you like your animal? Tell your teacher:</p>
        <p class="speaking">“I am a ${speakingName}. I am _____ and _____.”<br>“I like _____.”</p>
      </div>
      <button type="button" class="primary" id="restart">Try again</button>
    </div>
  </section>`);
  locked = false;
}

quiz.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || locked) return;

  if (button.id === 'start') {
    begin();
  } else if (button.id === 'restart') {
    rounds = [];
    answers = [];
    index = 0;
    show(startScreen);
  } else if (button.id === 'back' && index > 0) {
    index--;
    showQuestion();
  } else if (button.matches('.option')) {
    choose(button);
  }
});
