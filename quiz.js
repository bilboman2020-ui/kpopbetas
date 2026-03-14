const archetypes = [
  {
    name: "Keyholder Sovereign",
    activity: "Chastity Control",
    persona: "Ice Queen Dominant",
    idols: ["Jennie", "Karina", "Krystal"],
    traits: { authority: 3, service: 1, validation: 1, discipline: 2, tension: 3, ego: 2 }
  },
  {
    name: "The Headmistress",
    activity: "Caning / Formal Discipline",
    persona: "Strict Teacher",
    idols: ["Irene", "Jisoo", "Soyeon"],
    traits: { authority: 3, service: 1, validation: 1, discipline: 3, tension: 1, ego: 2 }
  },
  {
    name: "Velvet Temptress",
    activity: "Teasing / Denial",
    persona: "Playful Seductress",
    idols: ["Sana", "Ningning", "Joy"],
    traits: { authority: 1, service: 1, validation: 2, discipline: 1, tension: 3, ego: 3 }
  },
  {
    name: "Sadistic Trainer",
    activity: "Paddle / Physical Training",
    persona: "Intense Dominant",
    idols: ["Lisa", "Hyuna", "Seulgi"],
    traits: { authority: 2, service: 1, validation: 1, discipline: 3, tension: 2, ego: 2 }
  },
  {
    name: "The Idol Princess",
    activity: "Worship / Devotion",
    persona: "Untouchable Idol",
    idols: ["Wonyoung", "Tzuyu", "Suzy"],
    traits: { authority: 2, service: 3, validation: 3, discipline: 1, tension: 2, ego: 1 }
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
  document.getElementById("question").innerText = q.text;
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

    for (let trait in scores) {
      score += Math.abs(scores[trait] - a.traits[trait]);
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
