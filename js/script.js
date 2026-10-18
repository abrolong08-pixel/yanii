/* =========================================================
   ✏️  PERSONALIZA AQUÍ (solo cambia estos textos)
   ========================================================= */
const CONFIG = {
  nombre: "mi amor",      // ← pon su nombre, ej: "Valeria"
  firma: "Tu novio",      // ← pon tu nombre, ej: "Con amor, Carlos"
  parrafos: {
    p1: "Hay personas que llegan a tu vida como una estrella fugaz: bonitas, pero pasan. Y luego llegaste tú, que te quedaste como una constelación entera. 🌌",
    p2: "Quise hacerte esta cartita porque hay cosas que a veces se me quedan en el pecho y quiero que las leas con calma, con música y con todo el universo de testigo.",
    p3: "De verdad, estoy muy orgulloso de ti. Orgulloso de la mujer que eres, de cómo te levantas cada día con ganas aunque estés cansada, aunque el día pese. Orgulloso de cada meta que cumples y de cada cosa que sigues construyendo.",
    p4: "Eres la persona más trabajadora que conozco. Veo tu esfuerzo, tu dedicación, las veces que das más de lo que tienes y aun así sigues adelante. Nada de lo que has logrado fue casualidad: lo construiste tú, paso a paso, con tus manos y con tu corazón. Eso me inspira todos los días. 🌷",
    p5: "Si el universo tuviera un millón de galaxias, yo te elegiría igual. Y si los dinosaurios siguieran vivos, te elegiría en medio del meteorito, porque tú ya eres más fuerte que cualquier T-rex. 🦖",
    p6: "Eres como un tulipán: delicada y fuerte a la vez, y floreces incluso después del invierno más largo. Gracias por ser mi hogar, mi risa y mi lugar favorito en este planeta. Te amo hasta el último rincón del universo… y de vuelta. 💜"
  }
};

/* =========================================================
   Texto
   ========================================================= */
document.getElementById("title").textContent = `Para ti, ${CONFIG.nombre} 💜`;
Object.entries(CONFIG.parrafos).forEach(([id, txt]) => (document.getElementById(id).textContent = txt));
document.getElementById("sign").innerHTML = `Con todo mi amor,<br>${CONFIG.firma} 💜`;

/* =========================================================
   Estrellas (canvas) + estrellas fugaces
   ========================================================= */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  const n = Math.floor((innerWidth * innerHeight) / 4500);
  stars = Array.from({ length: n }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    t: Math.random() * Math.PI * 2,
    s: Math.random() * 0.03 + 0.01,
    c: ["#ffffff", "#ffd9ee", "#d9e6ff", "#fff3b8"][Math.floor(Math.random() * 4)]
  }));
}
addEventListener("resize", resize);
resize();

(function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const s of stars) {
    s.t += s.s;
    ctx.globalAlpha = 0.45 + Math.sin(s.t) * 0.45;
    ctx.fillStyle = s.c;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  requestAnimationFrame(draw);
})();

function shootingStar() {
  const el = document.createElement("div");
  el.className = "shoot";
  el.style.left = 30 + Math.random() * 70 + "vw";
  el.style.top = Math.random() * 40 + "vh";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}
setInterval(shootingStar, 3500);

/* =========================================================
   Dinosaurios (SVG) y tulipanes (SVG)
   ========================================================= */
function dinoSVG(color, belly) {
  return `
  <svg viewBox="0 0 200 125" width="100%" aria-hidden="true">
    <g fill="${color}">
      <path d="M130 62 Q172 66 196 104 Q160 94 128 92 Z"/>
      <rect x="62" y="88" width="16" height="30" rx="7"/>
      <rect x="86" y="92" width="16" height="26" rx="7"/>
      <rect x="112" y="92" width="16" height="26" rx="7"/>
      <rect x="134" y="88" width="16" height="30" rx="7"/>
      <ellipse cx="100" cy="74" rx="52" ry="30"/>
      <path d="M64 70 Q40 50 50 16 L72 14 Q66 44 92 58 Z"/>
      <ellipse cx="60" cy="16" rx="17" ry="11"/>
    </g>
    <ellipse cx="100" cy="86" rx="38" ry="14" fill="${belly}" opacity=".85"/>
    <g fill="#fff" opacity=".35">
      <circle cx="90" cy="60" r="5"/><circle cx="112" cy="55" r="4"/><circle cx="130" cy="66" r="5"/>
    </g>
    <circle cx="56" cy="13" r="3.2" fill="#2a1a3d"/><circle cx="57" cy="12" r="1" fill="#fff"/>
    <ellipse cx="66" cy="20" rx="4" ry="2.5" fill="#ff8fc7" opacity=".8"/>
    <path d="M50 22 q5 4 10 0" stroke="#2a1a3d" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  </svg>`;
}
document.getElementById("dino1").innerHTML = `<div class="bob">${dinoSVG("#7fd9a0", "#d8ffe4")}</div>`;
document.getElementById("dino2").innerHTML = `<div class="bob">${dinoSVG("#ffb3d9", "#ffe8f4")}</div>`;

const TULIP_COLORS = [
  ["#ff5fa2", "#d63384"], ["#ff8fc7", "#e05aa0"], ["#b983ff", "#8a4dde"],
  ["#ff6b6b", "#d63c3c"], ["#ffd966", "#e8b92e"], ["#ffffff", "#e5d3ff"]
];
function tulipSVG([c1, c2]) {
  return `
  <svg viewBox="0 0 60 130" width="46" aria-hidden="true">
    <path d="M30 58 C28 90 30 110 30 130" stroke="#3f9a62" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M30 118 C10 112 6 92 8 80 C22 88 30 100 30 118Z" fill="#4caf73"/>
    <path d="M30 108 C48 102 54 84 52 72 C38 80 30 92 30 108Z" fill="#3f9a62"/>
    <path d="M10 28 C8 50 20 62 30 62 C40 62 52 50 50 28 L40 38 L30 20 L20 38 Z" fill="${c1}"/>
    <path d="M30 20 L40 38 L50 28 C52 50 40 62 30 62 Z" fill="${c2}" opacity=".6"/>
  </svg>`;
}
const tulipBox = document.getElementById("tulips");
function plantTulips() {
  tulipBox.innerHTML = "";
  const n = Math.ceil(innerWidth / 38);
  for (let i = 0; i < n; i++) {
    const t = document.createElement("div");
    t.className = "tulip";
    t.style.left = (i / n) * 100 + Math.random() * 2 + "%";
    t.style.setProperty("--s", (0.55 + Math.random() * 0.7).toFixed(2));
    t.style.animationDelay = `${Math.random() * 2.5}s, ${Math.random() * 3}s`;
    t.innerHTML = tulipSVG(TULIP_COLORS[Math.floor(Math.random() * TULIP_COLORS.length)]);
    tulipBox.appendChild(t);
  }
}
plantTulips();

/* =========================================================
   Sobre + música
   ========================================================= */
const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");
const envelope = document.getElementById("envelope");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
document.body.classList.add("locked");
music.volume = 0.7;

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  music.play().catch(() => {});           // el clic permite reproducir con sonido
  setTimeout(() => intro.classList.add("leaving"), 900);
  setTimeout(() => {
    intro.classList.add("hidden");
    letter.classList.remove("hidden");
    musicBtn.classList.remove("hidden");
    requestAnimationFrame(() => letter.classList.add("show"));
    document.body.classList.remove("locked");
    setupReveal();
    burst(innerWidth / 2, innerHeight / 2, 14);
  }, 1900);
});

musicBtn.addEventListener("click", () => {
  if (music.paused) { music.play(); musicBtn.classList.remove("off"); }
  else { music.pause(); musicBtn.classList.add("off"); }
});

/* =========================================================
   Aparecer al hacer scroll
   ========================================================= */
function setupReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.08 + "s";
    io.observe(el);
  });
}

/* =========================================================
   Toca la pantalla: lluvia de tulipanes, corazones y dinos
   ========================================================= */
const EMOJIS = ["🌷", "💜", "🦕", "🦖", "✨", "🌷", "💖", "🪐"];
function burst(x, y, n = 6) {
  for (let i = 0; i < n; i++) {
    const el = document.createElement("span");
    el.className = "pop";
    el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    el.style.left = x - 12 + "px";
    el.style.top = y - 12 + "px";
    el.style.setProperty("--dx", (Math.random() - 0.5) * 220 + "px");
    el.style.setProperty("--r", (Math.random() - 0.5) * 120 + "deg");
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1700);
  }
}
addEventListener("pointerdown", (e) => {
  if (!intro.classList.contains("hidden") || e.target.closest("#music-btn")) return;
  burst(e.clientX, e.clientY);
});

addEventListener("resize", () => { clearTimeout(window.__rt); window.__rt = setTimeout(plantTulips, 300); });
