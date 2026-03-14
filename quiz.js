const archetypes = [
  {
    name: "Keyholder Sovereign",
    activity: "Chastity / control of desire",
    persona: "Ice Queen Dominant",
    idols: ["Jennie", "Karina", "Krystal"],
    traits: { authority: 3, service: 1, validation: 1, discipline: 2, tension: 3, ego: 1 }
  },
  {
    name: "Velvet Temptress",
    activity: "Tease & denial",
    persona: "Seductive Siren",
    idols: ["Sunmi", "Joy", "Ningning"],
    traits: { authority: 1, service: 1, validation: 2, discipline: 1, tension: 3, ego: 2 }
  },
  {
    name: "Ice Monarch",
    activity: "Ignoring / cold control",
    persona: "Cold Beauty",
    idols: ["Jessica Jung", "Kazuha", "Giselle"],
    traits: { authority: 3, service: 1, validation: 1, discipline: 1, tension: 3, ego: 1 }
  },
  {
    name: "Headmistress",
    activity: "Caning / strict discipline",
    persona: "Elegant Authority",
    idols: ["Irene", "Bona", "Arin"],
    traits: { authority: 3, service: 1, validation: 1, discipline: 3, tension: 1, ego: 2 }
  },
  {
    name: "Stern Enforcer",
    activity: "Whipping / severe discipline",
    persona: "Dark Commander",
    idols: ["Jihyo", "Yunjin", "Sihyeon"],
    traits: { authority: 3, service: 1, validation: 1, discipline: 3, tension: 1, ego: 3 }
  },
  {
    name: "Rule Keeper",
    activity: "Paddle / rule-based correction",
    persona: "Tactical Captain",
    idols: ["Yuri", "Hayoung", "J"],
    traits: { authority: 3, service: 1, validation: 1, discipline: 3, tension: 1, ego: 1 }
  },
  {
    name: "Moral Judge",
    activity: "Forced apology / accountability",
    persona: "Regal Arbiter",
    idols: ["Jisoo", "Yoona", "Sakura"],
    traits: { authority: 3, service: 1, validation: 1, discipline: 3, tension: 1, ego: 2 }
  },
  {
    name: "Behavior Trainer",
    activity: "Obedience tasks / training",
    persona: "Commanding Instructor",
    idols: ["BoA", "Kwon Eunbi", "Yeoreum"],
    traits: { authority: 3, service: 2, validation: 1, discipline: 3, tension: 1, ego: 1 }
  },
  {
    name: "Devotion Collector",
    activity: "Service devotion",
    persona: "Elegant Empress",
    idols: ["IU", "Suzy", "Miyeon"],
    traits: { authority: 2, service: 3, validation: 2, discipline: 1, tension: 1, ego: 1 }
  },
  {
    name: "Rewarding Queen",
    activity: "Praise / reward dynamic",
    persona: "Warm Mentor",
    idols: ["Taeyeon", "Solar", "Seulgi"],
    traits: { authority: 2, service: 2, validation: 3, discipline: 1, tension: 1, ego: 1 }
  },
  {
    name: "Admiration Empress",
    activity: "Forced compliments / admiration rituals",
    persona: "Glamour Queen",
    idols: ["Sana", "Winter", "Yuna"],
    traits: { authority: 2, service: 2, validation: 3, discipline: 1, tension: 2, ego: 1 }
  },
  {
    name: "Mischief Duchess",
    activity: "Playful teasing / humiliation",
    persona: "Playful Villainess",
    idols: ["Hwasa", "Hyuna", "Lisa"],
    traits: { authority: 1, service: 1, validation: 1, discipline: 1, tension: 3, ego: 3 }
  },
  {
    name: "Psychological Duelist",
    activity: "Verbal domination / wit",
    persona: "Sharp-Tongued Rapper",
    idols: ["Ryujin", "Moonbyul", "Yeeun"],
    traits: { authority: 2, service: 1, validation: 1, discipline: 1, tension: 2, ego: 3 }
  },
  {
    name: "Ego Breaker",
    activity: "Ego challenge / humiliation",
    persona: "Fierce Commander",
    idols: ["CL", "Yeji", "Soyeon"],
    traits: { authority: 3, service: 1, validation: 1, discipline: 2, tension: 2, ego: 3 }
  },
  {
    name: "Court Empress",
    activity: "Ritual submission / kneeling",
    persona: "Royal Princess",
    idols: ["Wonyoung", "Tzuyu", "Minju"],
    traits: { authority: 3, service: 2, validation: 2, discipline: 2, tension: 1, ego: 1 }
  }
];


const questions = [
  {
    text: "I prefer relationships where expectations are clearly defined.",
    trait: "authority"
  },
  {
    text: "I respond well when someone takes confident leadership.",
    trait: "authority"
  },
  {
    text: "Clear roles make a dynamic feel more secure to me.",
    trait: "authority"
  },
  {
    text: "I feel more comfortable when someone else sets the tone or structure.",
    trait: "authority"
  },

  {
    text: "I enjoy doing things that make a partner feel valued.",
    trait: "service"
  },
  {
    text: "Helping or pleasing a partner can feel rewarding in itself.",
    trait: "service"
  },
  {
    text: "Acts of devotion feel meaningful to me.",
    trait: "service"
  },
  {
    text: "I often show affection through effort and helpfulness.",
    trait: "service"
  },

  {
    text: "Praise strongly affects my motivation.",
    trait: "validation"
  },
  {
    text: "Feeling appreciated matters a lot to me in close relationships.",
    trait: "validation"
  },
  {
    text: "Compliments can stay with me for a long time.",
    trait: "validation"
  },
  {
    text: "Approval from someone I care about can feel intensely rewarding.",
    trait: "validation"
  },

  {
    text: "Rules can make a dynamic feel meaningful.",
    trait: "discipline"
  },
  {
    text: "Clear correction can help me improve when I trust the person giving it.",
    trait: "discipline"
  },
  {
    text: "Structure often feels reassuring rather than restrictive.",
    trait: "discipline"
  },
  {
    text: "Accountability can make a relationship dynamic feel deeper.",
    trait: "discipline"
  },

  {
    text: "Anticipation is often more exciting than immediate reward.",
    trait: "tension"
  },
  {
    text: "Waiting can intensify an experience for me.",
    trait: "tension"
  },
  {
    text: "Psychological buildup matters a lot to me.",
    trait: "tension"
  },
  {
    text: "Delayed gratification can feel especially powerful.",
    trait: "tension"
  },

  {
    text: "Playful teasing usually doesn't bother me.",
    trait: "ego"
  },
  {
    text: "I can handle being emotionally challenged in the right dynamic.",
    trait: "ego"
  },
  {
    text: "A little embarrassment can sometimes feel exciting rather than upsetting.",
    trait: "ego"
  },
  {
    text: "I do not always need to feel composed or in control.",
    trait: "ego"
  },
  {
    text: "Psychological vulnerability can sometimes make an experience feel more intense.",
    trait: "ego"
  }
];

let currentQuestion = 0;

let scores = {
  authority: 0,
  service: 0,
  validation: 0,
  discipline: 0,
  tension: 0,
  ego: 0
};

function startQuiz() {

  document.querySelector("button").style.display = "none";

  currentQuestion = 0;
  scores = {
    authority: 0,
    service: 0,
    validation: 0,
    discipline: 0,
    tension: 0,
    ego: 0
  };

  document.getElementById("results").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText =
"Question " + (currentQuestion + 1) + " / " + questions.length + " — " + q.text;

}

function answer(value) {
  const trait = questions[currentQuestion].trait;
  scores[trait] += value;

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    showResults();
  } else {
    showQuestion();
  }
}

function showResults() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("results").style.display = "block";

  let results = [];

archetypes.forEach(a => {

let score = 0;

for(let trait in scores){

let normalized = scores[trait] / 5; 
// convert roughly back to 1–3 scale

score += Math.abs(normalized - a.traits[trait]);

}


    results.push({
      name: a.name,
      activity: a.activity,
      persona: a.persona,
      idols: a.idols,
      score: score
    });
  });

  results.sort((a, b) => a.score - b.score);

  let top = results.slice(0, 5);

  let output = "<h2>Your Top Archetype Matches</h2>";

  top.forEach(r => {
    output += `
      <div style="margin: 24px auto; max-width: 700px; text-align: left; background: #1b1b1b; padding: 20px; border-radius: 10px;">
        <h3>${r.name}</h3>
        <p><b>Activity:</b> ${r.activity}</p>
        <p><b>K-pop Persona:</b> ${r.persona}</p>
        <p><b>Idol Examples:</b> ${r.idols.join(", ")}</p>
      </div>
    `;
  });

  document.getElementById("resultText").innerHTML = output;
}
