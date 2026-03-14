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
      let normalized = scores[trait] / 5;
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
