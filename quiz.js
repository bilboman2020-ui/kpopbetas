const archetypes = [
  {
    name: "Keyholder Sovereign",
    activity: "Chastity / control of desire",
    persona: "Ice Queen Dominant",
    idols: [
      { name: "Jennie", img: "images/jennie.jpg" },
      { name: "Karina", img: "images/karina.jpg" },
      { name: "Krystal", img: "images/krystal.jpg" }
    ],
    traits: { authority: 3, service: 1, validation: 1, discipline: 2, tension: 3, ego: 1 }
  },
  {
    name: "Velvet Temptress",
    activity: "Tease & denial",
    persona: "Seductive Siren",
    idols: [
      { name: "Sunmi", img: "images/sunmi.jpg" },
      { name: "Joy", img: "images/joy.jpg" },
      { name: "Ningning", img: "images/ningning.jpg" }
    ],
    traits: { authority: 1, service: 1, validation: 2, discipline: 1, tension: 3, ego: 2 }
  },
  {
    name: "Ice Monarch",
    activity: "Ignoring / cold control",
    persona: "Cold Beauty",
    idols: [
      { name: "Jessica Jung", img: "images/jessica-jung.jpg" },
      { name: "Kazuha", img: "images/kazuha.jpg" },
      { name: "Giselle", img: "images/giselle.jpg" }
    ],
    traits: { authority: 3, service: 1, validation: 1, discipline: 1, tension: 3, ego: 1 }
  },
  {
    name: "Headmistress",
    activity: "Caning / strict discipline",
    persona: "Elegant Authority",
    idols: [
      { name: "Irene", img: "images/irene.jpg" },
      { name: "Bona", img: "images/bona.jpg" },
      { name: "Arin", img: "images/arin.jpg" }
    ],
    traits: { authority: 3, service: 1, validation: 1, discipline: 3, tension: 1, ego: 2 }
  },
  {
    name: "Stern Enforcer",
    activity: "Whipping / severe discipline",
    persona: "Dark Commander",
    idols: [
      { name: "Jihyo", img: "images/jihyo.jpg" },
      { name: "Yunjin", img: "images/yunjin.jpg" },
      { name: "Sihyeon", img: "images/sihyeon.jpg" }
    ],
    traits: { authority: 3, service: 1, validation: 1, discipline: 3, tension: 1, ego: 3 }
  },
  {
    name: "Rule Keeper",
    activity: "Paddle / rule-based correction",
    persona: "Tactical Captain",
    idols: [
      { name: "Yuri", img: "images/yuri.jpg" },
      { name: "Hayoung", img: "images/hayoung.jpg" },
      { name: "J", img: "images/j.jpg" }
    ],
    traits: { authority: 3, service: 1, validation: 1, discipline: 3, tension: 1, ego: 1 }
  },
  {
    name: "Moral Judge",
    activity: "Forced apology / accountability",
    persona: "Regal Arbiter",
    idols: [
      { name: "Jisoo", img: "images/jisoo.jpg" },
      { name: "Yoona", img: "images/yoona.jpg" },
      { name: "Sakura", img: "images/sakura.jpg" }
    ],
    traits: { authority: 3, service: 1, validation: 1, discipline: 3, tension: 1, ego: 2 }
  },
  {
    name: "Behavior Trainer",
    activity: "Obedience tasks / training",
    persona: "Commanding Instructor",
    idols: [
      { name: "BoA", img: "images/boa.jpg" },
      { name: "Kwon Eunbi", img: "images/kwon-eunbi.jpg" },
      { name: "Yeoreum", img: "images/yeoreum.jpg" }
    ],
    traits: { authority: 3, service: 2, validation: 1, discipline: 3, tension: 1, ego: 1 }
  },
  {
    name: "Devotion Collector",
    activity: "Service devotion",
    persona: "Elegant Empress",
    idols: [
      { name: "IU", img: "images/iu.jpg" },
      { name: "Suzy", img: "images/suzy.jpg" },
      { name: "Miyeon", img: "images/miyeon.jpg" }
    ],
    traits: { authority: 2, service: 3, validation: 2, discipline: 1, tension: 1, ego: 1 }
  },
  {
    name: "Rewarding Queen",
    activity: "Praise / reward dynamic",
    persona: "Warm Mentor",
    idols: [
      { name: "Taeyeon", img: "images/taeyeon.jpg" },
      { name: "Solar", img: "images/solar.jpg" },
      { name: "Seulgi", img: "images/seulgi.jpg" }
    ],
    traits: { authority: 2, service: 2, validation: 3, discipline: 1, tension: 1, ego: 1 }
  },
  {
    name: "Admiration Empress",
    activity: "Forced compliments / admiration rituals",
    persona: "Glamour Queen",
    idols: [
      { name: "Sana", img: "images/sana.jpg" },
      { name: "Winter", img: "images/winter.jpg" },
      { name: "Yuna", img: "images/yuna.jpg" }
    ],
    traits: { authority: 2, service: 2, validation: 3, discipline: 1, tension: 2, ego: 1 }
  },
  {
    name: "Mischief Duchess",
    activity: "Playful teasing / humiliation",
    persona: "Playful Villainess",
    idols: [
      { name: "Hwasa", img: "images/hwasa.jpg" },
      { name: "Hyuna", img: "images/hyuna.jpg" },
      { name: "Lisa", img: "images/lisa.jpg" }
    ],
    traits: { authority: 1, service: 1, validation: 1, discipline: 1, tension: 3, ego: 3 }
  },
  {
    name: "Psychological Duelist",
    activity: "Verbal domination / wit",
    persona: "Sharp-Tongued Rapper",
    idols: [
      { name: "Ryujin", img: "images/ryujin.jpg" },
      { name: "Moonbyul", img: "images/moonbyul.jpg" },
      { name: "Yeeun", img: "images/yeeun.jpg" }
    ],
    traits: { authority: 2, service: 1, validation: 1, discipline: 1, tension: 2, ego: 3 }
  },
  {
    name: "Ego Breaker",
    activity: "Ego challenge / humiliation",
    persona: "Fierce Commander",
    idols: [
      { name: "CL", img: "images/cl.jpg" },
      { name: "Yeji", img: "images/yeji.jpg" },
      { name: "Soyeon", img: "images/soyeon.jpg" }
    ],
    traits: { authority: 3, service: 1, validation: 1, discipline: 2, tension: 2, ego: 3 }
  },
  {
    name: "Court Empress",
    activity: "Ritual submission / kneeling",
    persona: "Royal Princess",
    idols: [
      { name: "Wonyoung", img: "images/wonyoung.jpg" },
      { name: "Tzuyu", img: "images/tzuyu.jpg" },
      { name: "Minju", img: "images/minju.jpg" }
    ],
    traits: { authority: 3, service: 2, validation: 2, discipline: 2, tension: 1, ego: 1 }
  }
];

const questions = [
  {
    text: "Which feels more appealing?",
    optionA: "Someone confidently directing the dynamic",
    optionB: "Showing devotion through effort and helpfulness",
    traitA: "authority",
    traitB: "service"
  },
  {
    text: "Which feels more motivating?",
    optionA: "Praise and approval",
    optionB: "Rules and correction",
    traitA: "validation",
    traitB: "discipline"
  },
  {
    text: "Which feels more exciting?",
    optionA: "Psychological buildup and anticipation",
    optionB: "Playful teasing and ego challenge",
    traitA: "tension",
    traitB: "ego"
  },
  {
    text: "Which dynamic sounds better?",
    optionA: "Clear expectations and defined roles",
    optionB: "Warm appreciation and emotional reassurance",
    traitA: "authority",
    traitB: "validation"
  },
  {
    text: "Which feels more natural to you?",
    optionA: "Expressing care through acts of service",
    optionB: "Being motivated by praise and recognition",
    traitA: "service",
    traitB: "validation"
  },
  {
    text: "Which feels more compelling?",
    optionA: "Accountability and standards",
    optionB: "Delayed gratification and suspense",
    traitA: "discipline",
    traitB: "tension"
  },
  {
    text: "Which type of intensity is more appealing?",
    optionA: "Structured rules and order",
    optionB: "Psychological vulnerability and exposure",
    traitA: "discipline",
    traitB: "ego"
  },
  {
    text: "Which would matter more in a dynamic?",
    optionA: "Someone taking charge clearly",
    optionB: "Someone keeping you wanting more",
    traitA: "authority",
    traitB: "tension"
  },
  {
    text: "Which feels more meaningful?",
    optionA: "Earning approval and praise",
    optionB: "Proving devotion through service",
    traitA: "validation",
    traitB: "service"
  },
  {
    text: "Which sounds more appealing?",
    optionA: "Being held to clear standards",
    optionB: "Being playfully pushed out of your comfort zone",
    traitA: "discipline",
    traitB: "ego"
  },
  {
    text: "Which feels more attractive?",
    optionA: "A calm, authoritative presence",
    optionB: "A playful, teasing presence",
    traitA: "authority",
    traitB: "ego"
  },
  {
    text: "Which would be more satisfying?",
    optionA: "Making someone proud of you",
    optionB: "Making someone feel cared for through your actions",
    traitA: "validation",
    traitB: "service"
  },
  {
    text: "Which sounds more intense?",
    optionA: "Waiting, wanting, and anticipation",
    optionB: "Correction and consequences",
    traitA: "tension",
    traitB: "discipline"
  },
  {
    text: "Which kind of challenge appeals more?",
    optionA: "Learning to follow clear direction",
    optionB: "Handling teasing and emotional exposure",
    traitA: "authority",
    traitB: "ego"
  },
  {
    text: "Which feels more rewarding?",
    optionA: "Being useful and devoted",
    optionB: "Being kept in suspense",
    traitA: "service",
    traitB: "tension"
  },
  {
    text: "Which would draw you in more?",
    optionA: "Someone who praises and affirms you",
    optionB: "Someone who maintains strict standards",
    traitA: "validation",
    traitB: "discipline"
  },
  {
    text: "Which sounds more appealing overall?",
    optionA: "Ceremony, structure, and hierarchy",
    optionB: "Devotion, helpfulness, and care",
    traitA: "authority",
    traitB: "service"
  },
  {
    text: "Which creates stronger chemistry for you?",
    optionA: "Being kept guessing and wanting more",
    optionB: "Being openly tested and challenged",
    traitA: "tension",
    traitB: "ego"
  },
  {
    text: "Which feels more powerful?",
    optionA: "Approval from someone important to you",
    optionB: "Knowing exactly what is expected of you",
    traitA: "validation",
    traitB: "authority"
  },
  {
    text: "Which dynamic feels more compelling?",
    optionA: "Serving attentively and consistently",
    optionB: "Responding to correction and accountability",
    traitA: "service",
    traitB: "discipline"
  }
];

let currentQuestion = 0;
let selectedIdols = {};

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
  selectedIdols = {};

  scores = {
    authority: 0,
    service: 0,
    validation: 0,
    discipline: 0,
    tension: 0,
    ego: 0
  };

  const startButton = document.querySelector("button");
  if (startButton) {
    startButton.style.display = "none";
  }

  document.getElementById("results").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("question").innerText =
    "Question " + (currentQuestion + 1) + " / " + questions.length + " — " + q.text;

  document.getElementById("optionA").innerText = q.optionA;
  document.getElementById("optionB").innerText = q.optionB;
}

function answerChoice(choice) {
  const q = questions[currentQuestion];

  if (choice === "A") {
    scores[q.traitA] += 1;
  } else {
    scores[q.traitB] += 1;
  }

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
      let normalized = scores[trait] / 2;
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
    const safeName = r.name.replace(/\s+/g, "-");

    output += `
      <div style="margin: 24px auto; max-width: 900px; text-align: left; background: #1b1b1b; padding: 20px; border-radius: 10px;">
        <h3>${r.name}</h3>
        <p><b>Activity:</b> ${r.activity}</p>
        <p><b>K-pop Persona:</b> ${r.persona}</p>
        <p><b>Choose your idol for this archetype:</b></p>

        <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:12px;">
          ${r.idols.map(i => `
            <button
              onclick="selectIdol('${r.name}', '${i.name}')"
              data-archetype="${r.name}"
              data-idol="${i.name}"
              style="background:#222; border:2px solid transparent; border-radius:10px; padding:10px; cursor:pointer; width:150px;"
            >
              <img src="${i.img}" alt="${i.name}" style="width:100%; height:140px; object-fit:cover; border-radius:8px;">
              <div style="margin-top:8px; color:white; font-size:14px; font-weight:bold;">${i.name}</div>
            </button>
          `).join("")}
        </div>

        <p id="selected-${safeName}" style="margin-top:14px; font-weight:bold; color:#ff82ac;"></p>
      </div>
    `;
  });

  document.getElementById("resultText").innerHTML = output;
}

function selectIdol(archetypeName, idolName) {
  selectedIdols[archetypeName] = idolName;

  const safeName = archetypeName.replace(/\s+/g, "-");
  const selectedText = document.getElementById("selected-" + safeName);

  if (selectedText) {
    selectedText.innerText = "Chosen idol: " + idolName;
  }

  const allButtons = document.querySelectorAll(`[data-archetype="${archetypeName}"]`);
  allButtons.forEach(btn => {
    btn.style.border = "2px solid transparent";
  });

  const selectedButton = document.querySelector(
    `[data-archetype="${archetypeName}"][data-idol="${idolName}"]`
  );

  if (selectedButton) {
    selectedButton.style.border = "2px solid #ffffff";
  }
}
