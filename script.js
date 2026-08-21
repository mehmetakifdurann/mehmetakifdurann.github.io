const content = {
  about: `
    <p class="panel__eyebrow">The portrait on the wall</p>
    <h2 id="panel-title">Hello, I’m Mehmet.</h2>
    <p class="panel__lede">I’m a Computer Engineering student and backend developer in Ankara, interested in systems that turn difficult workflows into clear, dependable products.</p>
    <p>My work moves between backend engineering, mobile products, optimization, networks, and applied research. I enjoy the parts of software where architecture meets reality: scheduling constraints, unreliable connections, notification timing, database integrity, and the small product decisions that make all of it usable.</p>
    <p>Outside the code, I lead developer communities, organize technical events, and translate complicated ideas into content people can actually use. That mix of engineering and communication is the thread running through everything I build.</p>`,
  education: `
    <p class="panel__eyebrow">The diploma</p>
    <h2 id="panel-title">Always learning, always building.</h2>
    <p class="panel__lede">B.Sc. Computer Engineering at Başkent University, Ankara — expected January 2027.</p>
    <div class="timeline">
      <article class="timeline-item"><time>2023 — 2027</time><div><h3>Başkent University</h3><p>Computer Engineering. Coursework and independent work across algorithms, backend systems, networks, mobile development, databases, signal processing, and software design.</p></div></article>
      <article class="timeline-item"><time>2022 — 2023</time><div><h3>Istanbul Bilgi University</h3><p>Started Computer Engineering in a 100% English program before transferring to Başkent University.</p></div></article>
      <article class="timeline-item"><time>August 2026</time><div><h3>YÖKDİL English — 78.75</h3><p>Natural Sciences foreign-language examination.</p></div></article>
    </div>`,
  projects: `
    <p class="panel__eyebrow">The monitor</p>
    <h2 id="panel-title">Things I’ve built.</h2>
    <p class="panel__lede">A selection of systems where algorithms, infrastructure, and product thinking meet.</p>
    <div class="panel-grid">
      <article class="project"><img class="project__image" src="assets/optisched-1.jpeg" alt="OptiSched course planning interface"><div class="project__body"><h3>OptiSched</h3><p>University timetabling and classroom reservations. Models 890 lectures across 50 rooms as a constraint-satisfaction problem, then improves the result with local search.</p><div class="tags"><span>Python</span><span>PostgreSQL</span><span>Optimization</span></div><a href="https://github.com/mehmetakifdurann/optimalSchedule" target="_blank" rel="noreferrer">View repository ↗</a></div></article>
      <article class="project"><img class="project__image" src="assets/ilac-1.png" alt="Medication assistant mobile application"><div class="project__body"><h3>MedAssist</h3><p>Medication adherence and caregiver management with offline-first mobile state, role-based access, timezone-aware jobs, and missed-dose escalation.</p><div class="tags"><span>React Native</span><span>Node.js</span><span>PostgreSQL</span><span>Redis</span></div><a href="https://github.com/mehmetakifdurann/IlacAsistanim" target="_blank" rel="noreferrer">View repository ↗</a></div></article>
      <article class="project"><img class="project__image" src="filebridge-main.png" alt="FileBridge transfer interface"><div class="project__body"><h3>FileBridge</h3><p>A multi-threaded file-transfer application with chunked, resumable transfers, integrity checks, connection pooling, and real-time throughput reporting.</p><div class="tags"><span>C++</span><span>Multi-threading</span><span>Networks</span></div><a href="https://github.com/mehmetakifdurann/FileBridge" target="_blank" rel="noreferrer">View repository ↗</a></div></article>
      <article class="project"><img class="project__image" src="stoxly-main.png" alt="Stoxly financial analysis interface"><div class="project__body"><h3>Stoxly</h3><p>A personal investment-analysis product that turns dense market information into more approachable, plain-language insight.</p><div class="tags"><span>Python</span><span>Finance</span><span>Data</span></div><a href="https://github.com/mehmetakifdurann/Stoxly" target="_blank" rel="noreferrer">View repository ↗</a></div></article>
    </div>
    <p class="panel-note"><strong>Also in the workshop:</strong> ECG signal analysis and arrhythmia detection using C++ and MATLAB, blockchain research, and Arduino-based IoT prototypes.</p>`,
  experience: `
    <p class="panel__eyebrow">The trophy shelf</p>
    <h2 id="panel-title">Work, research, and leadership.</h2>
    <p class="panel__lede">Experience across enterprise IT, protocol research, audience growth, and developer communities.</p>
    <div class="timeline">
      <article class="timeline-item"><time>2025 — 2026</time><div><h3>Social Media Manager · Meet and Study Library</h3><p>Grew the audience by more than 2,000 followers and generated one million content views in 11 months while running the weekly calendar and event campaigns.</p></div></article>
      <article class="timeline-item"><time>Aug — Sep 2025</time><div><h3>IT Intern · 4S Information Technologies</h3><p>Administered Active Directory, configured network infrastructure, troubleshot connectivity, and used monitoring and logs to identify potential security issues.</p></div></article>
      <article class="timeline-item"><time>2024 — 2025</time><div><h3>R&D Intern · Feed Protocol</h3><p>Researched Zero Knowledge Proofs, Verifiable Random Functions, and randomness mechanisms for blockchain infrastructure and decentralized applications.</p></div></article>
      <article class="timeline-item"><time>2025 — Present</time><div><h3>Lead · GDG on Campus, Başkent University</h3><p>Lead a 20-member student developer community and organize technical workshops, training sessions, and events.</p></div></article>
      <article class="timeline-item"><time>2024 — 2025</time><div><h3>President · Başkent Computer Society</h3><p>Organized technical events and workshops for computer engineering students.</p></div></article>
    </div>`,
  skills: `
    <p class="panel__eyebrow">The bookshelf</p>
    <h2 id="panel-title">My engineering toolbox.</h2>
    <p class="panel__lede">I choose tools around the problem, with a particular interest in backend architecture, data flow, and systems behavior.</p>
    <h3>Languages</h3><div class="skill-cloud"><span>C</span><span>C++</span><span>C#</span><span>Java</span><span>Python</span><span>TypeScript</span><span>JavaScript</span><span>SQL</span><span>R</span><span>MATLAB</span></div>
    <h3>Backend, data & mobile</h3><div class="skill-cloud"><span>.NET</span><span>Node.js</span><span>Express</span><span>PostgreSQL</span><span>Redis</span><span>BullMQ</span><span>REST APIs</span><span>JWT</span><span>React Native</span></div>
    <h3>Systems & engineering</h3><div class="skill-cloud"><span>Multi-threading</span><span>Socket programming</span><span>TCP/IP</span><span>UDP</span><span>Active Directory</span><span>Docker</span><span>OOP</span><span>SOLID</span><span>Design patterns</span><span>Git</span></div>
    <h3>Exploration</h3><div class="skill-cloud"><span>Blockchain</span><span>dApps</span><span>Zero Knowledge Proofs</span><span>Arduino</span><span>Proteus</span></div>`,
  hobbies: `
    <p class="panel__eyebrow">The bass & basketball</p>
    <h2 id="panel-title">Life beyond the screen.</h2>
    <p class="panel__lede">Music and basketball keep me creative, collaborative, and moving.</p>
    <p><strong>I played bass guitar for 3 years in a local rock band.</strong> Playing with other musicians taught me to listen closely, hold the rhythm, and make the whole group sound better—not just myself.</p>
    <p>Basketball gives me the same kind of balance away from the desk: fast decisions, teamwork, repetition, and the energy to return to engineering problems with a fresh perspective.</p>`,
  contact: `
    <p class="panel__eyebrow">The envelope</p>
    <h2 id="panel-title">Let’s build something useful.</h2>
    <p class="panel__lede">I’m open to backend engineering, software development, internship, and collaboration opportunities. The best way to reach me is by email or LinkedIn.</p>
    <div class="contact-links">
      <a href="mailto:mehmetakifdurann@gmail.com">Email me</a>
      <a href="https://www.linkedin.com/in/mehmetakifduran/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://github.com/mehmetakifdurann" target="_blank" rel="noreferrer">GitHub</a>
      <a href="assets/Mehmet_Akif_Duran_CV.pdf" download>Download CV</a>
    </div>
    <p class="panel-note">Based in Ankara, Turkey · Working in English and Turkish.</p>`
};

const panel = document.querySelector('#content-panel');
const panelContent = document.querySelector('#panel-content');
const lightToggle = document.querySelector('.light-toggle');
const lampSwitch = document.querySelector('.lamp-switch');
const lightControls = [lightToggle, lampSwitch];
const soundToggle = document.querySelector('.sound-toggle');
const loader = document.querySelector('#loader');
const scene = document.querySelector('#scene');
const sceneWrap = document.querySelector('.scene-wrap');
const sceneArt = document.querySelector('.scene__art');
const dust = document.querySelector('#dust');
let previousFocus = null;
let soundEnabled = false;
let lightingTimer = null;

for (let index = 0; index < 34; index += 1) {
  const particle = document.createElement('i');
  particle.style.left = `${8 + Math.random() * 82}%`;
  particle.style.top = `${20 + Math.random() * 64}%`;
  particle.style.setProperty('--duration', `${5 + Math.random() * 8}s`);
  particle.style.setProperty('--delay', `${Math.random() * -10}s`);
  particle.style.setProperty('--drift', `${-25 + Math.random() * 60}px`);
  dust.appendChild(particle);
}

const startedAt = performance.now();
function revealRoom() {
  const delay = Math.max(0, 1650 - (performance.now() - startedAt));
  window.setTimeout(() => {
    loader.classList.add('is-hidden');
    scene.classList.add('is-ready');
  }, delay);
}

if (sceneArt.complete) revealRoom();
else sceneArt.addEventListener('load', revealRoom, {once:true});
window.setTimeout(revealRoom, 4500);

function centerMobileRoom() {
  if (matchMedia('(max-width:760px)').matches) {
    sceneWrap.scrollLeft = Math.max(0, (sceneWrap.scrollWidth - sceneWrap.clientWidth) / 2);
  }
}
window.addEventListener('load', () => window.setTimeout(centerMobileRoom, 60), {once:true});

if (matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  scene.addEventListener('pointermove', event => {
    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    scene.style.setProperty('--mx', `${x * -7}px`);
    scene.style.setProperty('--my', `${y * -5}px`);
  });
  scene.addEventListener('pointerleave', () => {
    scene.style.setProperty('--mx', '0px');
    scene.style.setProperty('--my', '0px');
  });
}

function playClick() {
  if (!soundEnabled) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  const ctx = new AudioCtx();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(560, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(260, ctx.currentTime + .08);
  gain.gain.setValueAtTime(.035, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .09);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + .1);
  oscillator.addEventListener('ended', () => ctx.close());
}

function openPanel(name, updateHash = true) {
  if (!content[name]) return;
  previousFocus = document.activeElement;
  panelContent.innerHTML = content[name];
  panel.classList.add('is-open');
  panel.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  panel.querySelector('.panel__close').focus({preventScroll:true});
  if (updateHash) history.replaceState(null, '', `#${name}`);
  playClick();
}

function closePanel(updateHash = true) {
  if (!panel.classList.contains('is-open')) return;
  panel.classList.remove('is-open');
  panel.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (updateHash) history.replaceState(null, '', location.pathname + location.search);
  previousFocus?.focus?.({preventScroll:true});
}

document.querySelectorAll('.open-panel').forEach(button => button.addEventListener('click', () => openPanel(button.dataset.panel)));
document.querySelectorAll('[data-close-panel]').forEach(button => button.addEventListener('click', closePanel));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closePanel();
  if (event.key === 'Tab' && panel.classList.contains('is-open')) {
    const focusable = [...panel.querySelectorAll('a,button')];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

function setNight(isNight, animate = true) {
  if (animate) {
    document.body.classList.add('lighting-transition');
    window.clearTimeout(lightingTimer);
    lightingTimer = window.setTimeout(() => document.body.classList.remove('lighting-transition'), 3000);
  }
  document.body.classList.toggle('is-night', isNight);
  lightControls.forEach(control => {
    control.setAttribute('aria-pressed', String(isNight));
    control.setAttribute('title', isNight ? 'Light is on · click to turn it off' : 'Light is off · click to turn it on');
  });
  lightToggle.setAttribute('aria-label', isNight ? 'Turn the desk lamp off and return to day' : 'Turn the desk lamp on and change to night');
  lampSwitch.setAttribute('aria-label', isNight ? 'Click the desk lamp to turn it off' : 'Click the desk lamp to turn it on');
  lampSwitch.querySelector('small').textContent = isNight ? 'Turn the light off' : 'Turn the light on';
}

lightControls.forEach(control => control.addEventListener('click', () => setNight(!document.body.classList.contains('is-night'))));
soundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundToggle.setAttribute('aria-pressed', String(soundEnabled));
  soundToggle.setAttribute('aria-label', soundEnabled ? 'Turn room sounds off' : 'Turn room sounds on');
  if (soundEnabled) playClick();
});

// Every fresh page visit starts in daylight with the desk lamp off.
setNight(false, false);
const initialPanel = location.hash.slice(1);
if (content[initialPanel]) openPanel(initialPanel, false);
