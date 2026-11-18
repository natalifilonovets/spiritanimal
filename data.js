const questions = [
  {
    "title": "Your spaceship lands on a new planet. What do you do first?",
    "options": [
      {
        "label": "Look for something new.",
        "animal": "fox"
      },
      {
        "label": "Stay with my team.",
        "animal": "wolf"
      },
      {
        "label": "Say hello to new people.",
        "animal": "dolphin"
      },
      {
        "label": "Find a quiet place.",
        "animal": "cat"
      }
    ]
  },
  {
    "title": "You find a small box. What do you want to see inside?",
    "options": [
      {
        "label": "A photo of my friends.",
        "animal": "wolf"
      },
      {
        "label": "A star map.",
        "animal": "owl"
      },
      {
        "label": "Soft headphones.",
        "animal": "cat"
      },
      {
        "label": "A tiny green plant.",
        "animal": "deer"
      }
    ]
  },
  {
    "title": "Your friend is sad. What do you do?",
    "options": [
      {
        "label": "Listen to my friend.",
        "animal": "owl"
      },
      {
        "label": "Tell a funny joke.",
        "animal": "dolphin"
      },
      {
        "label": "Give my friend a hug.",
        "animal": "deer"
      },
      {
        "label": "Think of a fun plan.",
        "animal": "fox"
      }
    ]
  },
  {
    "title": "You have one free hour. What sounds best?",
    "options": [
      {
        "label": "Dance to music.",
        "animal": "dolphin"
      },
      {
        "label": "Watch a film and relax.",
        "animal": "cat"
      },
      {
        "label": "Make something new.",
        "animal": "fox"
      },
      {
        "label": "Play a team game.",
        "animal": "wolf"
      }
    ]
  },
  {
    "title": "Where would you sit on a spaceship?",
    "options": [
      {
        "label": "In a soft seat by the window.",
        "animal": "cat"
      },
      {
        "label": "Near a little garden.",
        "animal": "deer"
      },
      {
        "label": "Next to my friends.",
        "animal": "wolf"
      },
      {
        "label": "In a quiet room with books.",
        "animal": "owl"
      }
    ]
  },
  {
    "title": "Your friend cannot find their bag. What do you do?",
    "options": [
      {
        "label": "Help them look for it.",
        "animal": "deer"
      },
      {
        "label": "Think of a new place to look.",
        "animal": "fox"
      },
      {
        "label": "Ask where they saw it last.",
        "animal": "owl"
      },
      {
        "label": "Make a fun search game.",
        "animal": "dolphin"
      }
    ]
  },
  {
    "title": "Which gift would you love?",
    "options": [
      {
        "label": "A mystery box.",
        "animal": "fox"
      },
      {
        "label": "Tickets for me and my friends.",
        "animal": "wolf"
      },
      {
        "label": "A music speaker.",
        "animal": "dolphin"
      },
      {
        "label": "A warm, soft blanket.",
        "animal": "cat"
      }
    ]
  },
  {
    "title": "It is raining all day. What do you do?",
    "options": [
      {
        "label": "Call my friends.",
        "animal": "wolf"
      },
      {
        "label": "Read a book about space.",
        "animal": "owl"
      },
      {
        "label": "Watch a film and rest.",
        "animal": "cat"
      },
      {
        "label": "Make cookies for my family.",
        "animal": "deer"
      }
    ]
  },
  {
    "title": "You can choose a superpower. Which one?",
    "options": [
      {
        "label": "Read minds.",
        "animal": "owl"
      },
      {
        "label": "Talk to sea animals.",
        "animal": "dolphin"
      },
      {
        "label": "Make flowers grow.",
        "animal": "deer"
      },
      {
        "label": "Turn invisible.",
        "animal": "fox"
      }
    ]
  },
  {
    "title": "Your team has a big task. What do you do?",
    "options": [
      {
        "label": "Make everyone smile.",
        "animal": "dolphin"
      },
      {
        "label": "Work on my part alone.",
        "animal": "cat"
      },
      {
        "label": "Find a new idea.",
        "animal": "fox"
      },
      {
        "label": "Help the whole team.",
        "animal": "wolf"
      }
    ]
  },
  {
    "title": "Which place feels like home?",
    "options": [
      {
        "label": "A room with soft lights.",
        "animal": "cat"
      },
      {
        "label": "A green forest.",
        "animal": "deer"
      },
      {
        "label": "A house full of friends.",
        "animal": "wolf"
      },
      {
        "label": "A quiet library.",
        "animal": "owl"
      }
    ]
  },
  {
    "title": "You see a shooting star. What do you wish for?",
    "options": [
      {
        "label": "Happy days for my family.",
        "animal": "deer"
      },
      {
        "label": "New things to try.",
        "animal": "fox"
      },
      {
        "label": "Answers to big questions.",
        "animal": "owl"
      },
      {
        "label": "More fun days.",
        "animal": "dolphin"
      }
    ]
  }
];

const animals = {
  "fox": {
    "name": "THE STAR FOX",
    "traits": "Curious · Creative · Clever",
    "description": "You love new ideas. You like to try new things. Your magic is your creative mind!",
    "starMessage": "Keep exploring!",
    "alt": "A red fox with bright amber eyes in a field of golden stars"
  },
  "wolf": {
    "name": "THE MOON WOLF",
    "traits": "Loyal · Brave · Friendly",
    "description": "Your friends are important to you. You like to work with others. Your magic is your big heart!",
    "starMessage": "Shine with your team!",
    "alt": "A silver-blue wolf beneath a glowing moon"
  },
  "owl": {
    "name": "THE DREAM OWL",
    "traits": "Calm · Smart · Thoughtful",
    "description": "You like to ask questions. You notice small things. Your magic is your bright mind!",
    "starMessage": "Follow your ideas!",
    "alt": "An owl with wide wings inside golden star rings"
  },
  "dolphin": {
    "name": "THE COSMIC DOLPHIN",
    "traits": "Fun · Friendly · Playful",
    "description": "You love to laugh. You make people smile. Your magic is your happy energy!",
    "starMessage": "Bring joy to the stars!",
    "alt": "A dolphin leaping through a ring of sparkling blue water"
  },
  "cat": {
    "name": "THE NEBULA CAT",
    "traits": "Calm · Free · Confident",
    "description": "You like your own space. You know what makes you happy. Your magic is being yourself!",
    "starMessage": "Be your own star!",
    "alt": "A fluffy cat with glowing eyes in a pink and purple nebula"
  },
  "deer": {
    "name": "THE STARLIGHT DEER",
    "traits": "Kind · Gentle · Caring",
    "description": "You care about people and animals. You like to help others. Your magic is your kind heart!",
    "starMessage": "Let your kindness shine!",
    "alt": "A young deer with bright branching antlers in a starry forest"
  }
};
