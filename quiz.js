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
    text: "I enjoy doing things that make a partner feel valued.",
    trait: "service"
  },
  {
    text: "Praise strongly affects my motivation.",
    trait: "validation"
  },
  {
    text: "Rules can make a dynamic feel meaningful.",
    trait: "discipline"
  },
  {
    text: "Anticipation is often more exciting than immediate reward.",
    trait: "tension"
  },
  {
    text: "Playful teasing usually doesn't bother me.",
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
