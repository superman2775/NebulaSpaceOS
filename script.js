const APPS = [
  {
    id: "about",
    name: "About",
    icon: "🪐",
    content: `
      <h4>Welcome to Nebula OS</h4>
      <p>A desktop-inspired web experience with draggable, resizable windows and a responsive mobile launcher.</p>
      <p>Use desktop icons or launcher to open apps. Double-click title bars to maximize/restore.</p>
    `,
  },
  {
    id: "projects",
    name: "Projects",
    icon: "📁",
    content: `
      <h4>Portfolio Projects</h4>
      <ul>
        <li>Orbit UI Kit - component system focused on glassmorphism.</li>
        <li>Skyline Dashboard - analytics app with real-time widgets.</li>
        <li>QuickNotes PWA - offline-first notes with sync.</li>
      </ul>
    `,
  },
  {
    id: "explorer",
    name: "File Explorer",
    icon: "🗂️",
    content: `
      <h4>File Explorer</h4>
      <div class="explorer-layout">
        <div class="explorer-folders">
          <button type="button" data-folder="documents">Documents</button>
          <button type="button" data-folder="downloads">Downloads</button>
          <button type="button" data-folder="media">Media</button>
        </div>
        <ul class="explorer-files" data-files></ul>
      </div>
    `,
  },
  {
    id: "settings",
    name: "Settings",
    icon: "⚙️",
    content: `
      <h4>Appearance Settings</h4>
      <div class="settings-row">
        <label for="theme-toggle">High Contrast Theme</label>
        <input id="theme-toggle" type="checkbox" />
      </div>
      <div class="settings-row">
        <label for="anim-toggle">Window Animations</label>
        <input id="anim-toggle" type="checkbox" checked />
      </div>
      <p class="settings-status" data-settings-status>Current: Dark Nebula, animations enabled.</p>
    `,
  },
  {
    id: "help",
    name: "Help",
    icon: "❓",
    content: `
      <h4>Shortcuts</h4>
      <ul>
        <li><strong>Esc</strong>: close focused window</li>
        <li><strong>Double-click title bar</strong>: maximize/restore</li>
        <li><strong>Click taskbar item</strong>: focus or restore minimized app</li>
      </ul>
    `,
  },
  {
    id: "notes",
    name: "Notes",
    icon: "📝",
    content: `
      <h4>Quick Notes</h4>
      <textarea class="notes-input" data-notes-input rows="9" placeholder="Write your notes..."></textarea>
      <div class="notes-actions">
        <button type="button" data-notes-save>Save</button>
        <button type="button" data-notes-clear>Clear</button>
        <span data-notes-status aria-live="polite"></span>
      </div>
    `,
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: "📅",
    content: `
      <h4>Calendar</h4>
      <div class="calendar-head">
        <button type="button" data-cal-prev aria-label="Previous month">←</button>
        <strong data-cal-title></strong>
        <button type="button" data-cal-next aria-label="Next month">→</button>
      </div>
      <div class="calendar-grid" data-cal-grid></div>
    `,
  },
  {
    id: "terminal",
    name: "Terminal",
    icon: "⌨️",
    content: `
      <h4>Terminal</h4>
      <div class="terminal-output" data-terminal-output></div>
      <form class="terminal-form" data-terminal-form>
        <label>
          <span>amazing-user@nebula %</span>
          <input data-terminal-input type="text" autocomplete="off" />
        </label>
      </form>
    `,
  },
  {
    id: "music",
    name: "Music",
    icon: "🎵",
    content: `
      <h4>Now Playing</h4>
      <p><strong data-music-track>Aurora Drift</strong> - <span data-music-artist>Night Signals</span></p>
      <input class="music-progress" type="range" min="0" max="100" value="0" data-music-seek aria-label="Track progress" />
      <p data-music-time>00:00 / 00:00</p>
      <div class="music-controls">
        <button type="button" data-music-prev>Prev</button>
        <button type="button" data-music-play>Play</button>
        <button type="button" data-music-next>Next</button>
      </div>
      <p data-music-status>Paused</p>
    `,
  },
  {
    id: "photos",
    name: "Photos",
    icon: "🖼️",
    content: `
      <h4>Photo Library</h4>
      <div class="photo-list" data-photo-list></div>
      <p data-photo-preview>Select a photo to preview metadata.</p>
    `,
  },
  {
    id: "mail",
    name: "Mail",
    icon: "📧",
    content: `
      <h4>Inbox</h4>
      <ul class="mail-list" data-mail-list></ul>
      <p data-mail-unread>Unread: 0</p>
    `,
  },
  {
    id: "weather",
    name: "Weather",
    icon: "⛅",
    content: `
      <h4>Local Forecast</h4>
      <p data-weather-now></p>
      <p data-weather-tonight></p>
      <p data-weather-tomorrow></p>
      <div class="weather-actions">
        <button type="button" data-weather-toggle>Switch to °F</button>
        <button type="button" data-weather-refresh>Refresh</button>
      </div>
    `,
  },
  {
    id: "calculator",
    name: "Calculator",
    icon: "🧮",
    content: `
      <h4>Calculator</h4>
      <input class="calc-display" data-calc-display type="text" readonly value="0" />
      <div class="calc-grid" data-calc-grid>
        <button type="button" data-calc="7">7</button><button type="button" data-calc="8">8</button><button type="button" data-calc="9">9</button><button type="button" data-calc="/">÷</button>
        <button type="button" data-calc="4">4</button><button type="button" data-calc="5">5</button><button type="button" data-calc="6">6</button><button type="button" data-calc="*">×</button>
        <button type="button" data-calc="1">1</button><button type="button" data-calc="2">2</button><button type="button" data-calc="3">3</button><button type="button" data-calc="-">-</button>
        <button type="button" data-calc="0">0</button><button type="button" data-calc=".">.</button><button type="button" data-calc="=">=</button><button type="button" data-calc="+">+</button>
        <button type="button" class="calc-clear" data-calc="C">Clear</button>
      </div>
    `,
  },
  {
    id: "tasks",
    name: "Tasks",
    icon: "✅",
    content: `
      <h4>Task List</h4>
      <form class="task-form" data-task-form>
        <input type="text" data-task-input placeholder="Add a task..." />
        <button type="submit">Add</button>
      </form>
      <ul class="task-list" data-task-list></ul>
    `,
  },
  {
    id: "clockapp",
    name: "Clock",
    icon: "⏱️",
    content: `
      <h4>Stopwatch</h4>
      <p class="clock-readout" data-clock-readout>00:00.0</p>
      <div class="clock-actions">
        <button type="button" data-clock-start>Start</button>
        <button type="button" data-clock-stop>Stop</button>
        <button type="button" data-clock-reset>Reset</button>
      </div>
    `,
  },
  {
    id: "nebulasurf",
    name: "Orbit",
    icon: "🛰️",
    content: `
      <h4>Orbit</h4>
      <div class="nebula-browser">
        <div class="nebula-browser-toolbar">
          <button type="button" data-surf-back aria-label="Back">←</button>
          <button type="button" data-surf-forward aria-label="Forward">→</button>
          <button type="button" data-surf-refresh aria-label="Refresh">↻</button>
          <button type="button" data-surf-home>Home</button>
          <input type="text" data-surf-url placeholder="https://example.com" spellcheck="false" />
          <button type="button" data-surf-go>Go</button>
          <button type="button" data-surf-bookmark>Add bookmark</button>
        </div>
        <p class="nebula-browser-hint">Many websites unfortunately block this browser. Wanna test with a real website? Try https://example.com/</p>
        <div class="nebula-browser-frame-wrap">
          <iframe data-surf-frame title="Orbit" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
        </div>
        <div class="surf-bookmarks" data-surf-bookmarks></div>
      </div>
    `,
  },
  {
    id: "nebulaforge",
    name: "Nexus",
    icon: "⚡",
    content: `
      <h4>Nexus</h4>
      <p class="nebula-browser-hint">The best code editor for NebulaOS.</p>
      <div class="nebula-forge-wrap">
        <div class="nebula-forge-toolbar">
          <button type="button" data-forge-save>Save</button>
          <button type="button" data-forge-clear>Clear</button>
          <button type="button" data-forge-download>Download .txt</button>
        </div>
        <textarea class="nebula-forge-editor" data-forge-editor spellcheck="false" placeholder="// Nexus&#10;console.log('Nexus is amazing. This projects deserves a ten star rating!');"></textarea>
        <p data-forge-status class="nebula-browser-hint" aria-live="polite"></p>
      </div>
    `,
  },
];

const AUTH_USERS_KEY = "nebula.auth.users";
const AUTH_SESSION_KEY = "nebula.session";
const AUTH_PERSIST_KEY = "nebula.auth.persistent";
const FORGE_STORAGE_KEY = "nebula.forge.document";
const SURF_BOOKMARKS_KEY = "nebula.surf.bookmarks";

const NEBULA_SURF_WELCOME = `data:text/html;charset=utf-8,${encodeURIComponent(
  `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Nebula Surf</title><style>body{font-family:system-ui,sans-serif;background:linear-gradient(160deg,#0a1020,#152a48);color:#dbe8ff;margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;}main{max-width:28rem;text-align:center}h1{font-size:1.35rem;margin:0 0 12px}a{color:#9bccff}</style></head><body><main><h1>Welcome to Nebula Surf</h1><p>Type a full URL (with <code>https://url.com) and press Go.</p><p>External pages may appear blank if the site forbids iframes, that is normal browser security, and we can't help that.</p></main></body></html>`,
)}`;

const desktopIcons = document.querySelector(".desktop-icons");
const windowLayer = document.getElementById("window-layer");
const taskItems = document.getElementById("task-items");
const startBtn = document.getElementById("start-btn");
const launcher = document.getElementById("launcher");
const launcherItems = document.getElementById("launcher-items");
const clock = document.getElementById("clock");
const bootScreen = document.getElementById("boot-screen");
const mobileGrid = document.getElementById("mobile-grid");
const mobileAppView = document.getElementById("mobile-app-view");
const loginScreen = document.getElementById("login-screen");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginError = document.querySelector("[data-login-error]");
const logoutBtn = document.getElementById("logout-btn");
const mobileLogoutBtn = document.getElementById("mobile-logout-btn");
const showLoginBtn = document.querySelector("[data-show-login]");
const showRegisterBtn = document.querySelector("[data-show-register]");

const windowTemplate = document.getElementById("window-template");

const state = {
  windows: new Map(),
  zCounter: 20,
  activeAppId: null,
};

const appState = {
  notes: localStorage.getItem("nebula.notes") || "",
  calendarDate: new Date(),
  musicIndex: 0,
  musicPlaying: false,
  photos: [
    { name: "Mountain Lake", src: "photos/mountain-lake.jpg", meta: "1200x800 · Alpine landscape" },
    { name: "Dog in a Blanket", src: "photos/parrot-closeup.jpg", meta: "1200x800 · Cozy portrait" },
    { name: "Waterfall", src: "photos/forest-stream.jpg", meta: "1200x800 · Nature scene" },
  ],
  mail: [
    { from: "Design Team", subject: "Updated icon set ready", unread: true },
    { from: "Client", subject: "Feedback on desktop interactions", unread: true },
    { from: "Scheduler", subject: "Meeting reminder for tomorrow", unread: true },
  ],
  weatherCelsius: true,
  weather: { now: 17, tonight: 11, tomorrow: 19, condition: "Partly Cloudy" },
  tasks: JSON.parse(localStorage.getItem("nebula.tasks") || "[]"),
};

const MUSIC_TRACKS = [
  { title: "Aurora Drift", artist: "Night Signals", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "Moonline", artist: "Echo Transit", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "Coastal Lights", artist: "Luma Wave", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
];

const musicPlayer = new Audio(MUSIC_TRACKS[0].src);
musicPlayer.preload = "metadata";
const musicSubscribers = new Set();

function notifyMusicSubscribers() {
  musicSubscribers.forEach((render) => render());
}

musicPlayer.addEventListener("timeupdate", notifyMusicSubscribers);
musicPlayer.addEventListener("loadedmetadata", notifyMusicSubscribers);
musicPlayer.addEventListener("play", () => {
  appState.musicPlaying = true;
  notifyMusicSubscribers();
});
musicPlayer.addEventListener("pause", () => {
  appState.musicPlaying = false;
  notifyMusicSubscribers();
});
musicPlayer.addEventListener("ended", () => {
  appState.musicIndex = (appState.musicIndex + 1) % MUSIC_TRACKS.length;
  musicPlayer.src = MUSIC_TRACKS[appState.musicIndex].src;
  musicPlayer.load();
  musicPlayer.play().catch(() => {
    appState.musicPlaying = false;
  });
  notifyMusicSubscribers();
});

function getAuthUsers() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveAuthUsers(users) {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function isAuthenticated() {
  const sessionUser = sessionStorage.getItem(AUTH_SESSION_KEY);
  const persistUser = localStorage.getItem(AUTH_PERSIST_KEY);
  const user = sessionUser || persistUser;
  if (!user) return false;
  const users = getAuthUsers();
  return Object.prototype.hasOwnProperty.call(users, user);
}

function setLoginError(message) {
  if (loginError) loginError.textContent = message;
}

function syncLoginFormsVisibility() {
  const users = getAuthUsers();
  const hasAccounts = Object.keys(users).length > 0;
  if (!loginForm || !registerForm || !showLoginBtn || !showRegisterBtn) return;
  if (!hasAccounts) {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    showLoginBtn.classList.add("hidden");
    showRegisterBtn.classList.add("hidden");
  } else {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    showLoginBtn.classList.remove("hidden");
    showRegisterBtn.classList.remove("hidden");
  }
}

function completeLogin(username, remember) {
  sessionStorage.setItem(AUTH_SESSION_KEY, username);
  if (remember) localStorage.setItem(AUTH_PERSIST_KEY, username);
  else localStorage.removeItem(AUTH_PERSIST_KEY);
  document.body.classList.add("nebula-authenticated");
  if (loginScreen) loginScreen.classList.add("hidden");
  setLoginError("");
}

function logout() {
  sessionStorage.removeItem(AUTH_SESSION_KEY);
  localStorage.removeItem(AUTH_PERSIST_KEY);
  document.body.classList.remove("nebula-authenticated");
  Array.from(state.windows.keys()).forEach((appId) => closeWindow(appId));
  state.activeAppId = null;
  updateTaskbar();
  if (loginScreen) {
    loginScreen.classList.remove("hidden");
    syncLoginFormsVisibility();
  }
  if (mobileAppView) mobileAppView.innerHTML = "";
  if (launcher) launcher.classList.add("hidden");
}

function handleShowRegisterClick() {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
}

function handleShowLoginClick() {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
}

function handleLoginSubmit(event) {
  if (event.defaultPrevented) return;
  event.preventDefault();
  const user = loginForm.querySelector("[data-login-user]")?.value.trim();
  const pass = loginForm.querySelector("[data-login-pass]")?.value;
  const remember = Boolean(loginForm.querySelector("[data-login-remember]")?.checked);
  const users = getAuthUsers();
  if (!user || !pass) {
    setLoginError("Enter username and password.");
    return;
  }
  if (users[user] !== pass) {
    setLoginError("Invalid username or password.");
    return;
  }
  completeLogin(user, remember);
}

function handleRegisterSubmit(event) {
  if (event.defaultPrevented) return;
  event.preventDefault();
  const user = registerForm.querySelector("[data-reg-user]")?.value.trim();
  const pass = registerForm.querySelector("[data-reg-pass]")?.value;
  const pass2 = registerForm.querySelector("[data-reg-pass2]")?.value;
  const users = getAuthUsers();
  if (!user || !pass) {
    setLoginError("Choose a username and password.");
    return;
  }
  if (pass !== pass2) {
    setLoginError("Passwords do not match.");
    return;
  }
  if (Object.prototype.hasOwnProperty.call(users, user)) {
    setLoginError("That username is already taken.");
    return;
  }
  users[user] = pass;
  saveAuthUsers(users);
  completeLogin(user, true);
  syncLoginFormsVisibility();
  registerForm.reset();
}

function handleLogoutClick() {
  logout();
}

function setupAuthUI() {
  if (showRegisterBtn) {
    showRegisterBtn.removeEventListener("click", handleShowRegisterClick);
    showRegisterBtn.addEventListener("click", handleShowRegisterClick);
  }
  if (showLoginBtn) {
    showLoginBtn.removeEventListener("click", handleShowLoginClick);
    showLoginBtn.addEventListener("click", handleShowLoginClick);
  }

  if (loginForm) {
    loginForm.removeEventListener("submit", handleLoginSubmit);
    loginForm.addEventListener("submit", handleLoginSubmit);
  }

  if (registerForm) {
    registerForm.removeEventListener("submit", handleRegisterSubmit);
    registerForm.addEventListener("submit", handleRegisterSubmit);
  }

  if (logoutBtn) {
    logoutBtn.removeEventListener("click", handleLogoutClick);
    logoutBtn.addEventListener("click", handleLogoutClick);
  }
  if (mobileLogoutBtn) {
    mobileLogoutBtn.removeEventListener("click", handleLogoutClick);
    mobileLogoutBtn.addEventListener("click", handleLogoutClick);
  }
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 820px)").matches;
}

function centerWindow(winEl, cascadeIndex = 0) {
  const desktopRect = document.getElementById("desktop").getBoundingClientRect();
  const x = Math.max(12, desktopRect.width / 2 - 300 + cascadeIndex * 24);
  const y = Math.max(12, desktopRect.height / 2 - 180 + cascadeIndex * 20);
  winEl.style.left = `${x}px`;
  winEl.style.top = `${y}px`;
}

function renderDesktopAndLauncher() {
  desktopIcons.innerHTML = "";
  launcherItems.innerHTML = "";
  mobileGrid.innerHTML = "";

  APPS.forEach((app) => {
    const iconBtn = document.createElement("button");
    iconBtn.className = "desktop-icon";
    iconBtn.innerHTML = `<span class="icon-glyph">${app.icon}</span><span class="icon-label">${app.name}</span>`;
    iconBtn.addEventListener("dblclick", () => openApp(app.id));
    iconBtn.addEventListener("click", () => iconBtn.focus());
    iconBtn.setAttribute("aria-label", `Open ${app.name}`);
    desktopIcons.appendChild(iconBtn);

    const launchBtn = document.createElement("button");
    launchBtn.className = "launcher-app";
    launchBtn.textContent = `${app.icon}  ${app.name}`;
    launchBtn.addEventListener("click", () => {
      openApp(app.id);
      launcher.classList.add("hidden");
    });
    launcherItems.appendChild(launchBtn);

    const mobileTile = document.createElement("button");
    mobileTile.className = "mobile-tile";
    mobileTile.innerHTML = `<strong>${app.icon} ${app.name}</strong>`;
    mobileTile.addEventListener("click", () => openMobilePanel(app.id));
    mobileGrid.appendChild(mobileTile);
  });
}

function createWindowForApp(appId) {
  const app = APPS.find((a) => a.id === appId);
  if (!app) return;

  const node = windowTemplate.content.firstElementChild.cloneNode(true);
  node.dataset.appId = app.id;
  node.querySelector(".window-title").textContent = `${app.icon} ${app.name}`;
  const contentEl = node.querySelector(".window-content");
  contentEl.innerHTML = app.content;

  const closeBtn = node.querySelector(".close");
  const rightCloseBtn = node.querySelector(".titlebar-close");
  const minBtn = node.querySelector(".minimize");
  const maxBtn = node.querySelector(".maximize");
  const titlebar = node.querySelector(".window-titlebar");
  const resizeHandle = node.querySelector(".resize-handle");

  closeBtn.addEventListener("click", () => closeWindow(app.id));
  rightCloseBtn.addEventListener("click", () => closeWindow(app.id));
  minBtn.addEventListener("click", () => minimizeWindow(app.id));
  maxBtn.addEventListener("click", () => toggleMaximize(app.id));

  titlebar.addEventListener("dblclick", () => toggleMaximize(app.id));
  node.addEventListener("mousedown", () => focusWindow(app.id));
  node.addEventListener("click", () => focusWindow(app.id));

  addDragBehavior(node, titlebar, app.id);
  addResizeBehavior(node, resizeHandle, app.id);
  initAppBehavior(app.id, contentEl);

  centerWindow(node, state.windows.size);
  node.style.zIndex = String(++state.zCounter);

  windowLayer.appendChild(node);
  state.windows.set(app.id, {
    el: node,
    minimized: false,
    maximized: false,
    preMaxRect: null,
  });
}

function focusWindow(appId) {
  const win = state.windows.get(appId);
  if (!win) return;
  state.activeAppId = appId;
  win.el.style.zIndex = String(++state.zCounter);
  updateTaskbar();
}

function minimizeWindow(appId) {
  const win = state.windows.get(appId);
  if (!win) return;
  win.minimized = true;
  win.el.classList.add("minimized");
  if (state.activeAppId === appId) {
    state.activeAppId = null;
  }
  updateTaskbar();
}

function restoreWindow(appId) {
  const win = state.windows.get(appId);
  if (!win) return;
  win.minimized = false;
  win.el.classList.remove("minimized");
  focusWindow(appId);
}

function closeWindow(appId) {
  const win = state.windows.get(appId);
  if (!win) return;
  win.el.remove();
  state.windows.delete(appId);
  if (state.activeAppId === appId) state.activeAppId = null;
  updateTaskbar();
}

function toggleMaximize(appId) {
  const win = state.windows.get(appId);
  if (!win || win.minimized) return;
  const el = win.el;

  if (!win.maximized) {
    win.preMaxRect = {
      left: el.style.left,
      top: el.style.top,
      width: el.style.width,
      height: el.style.height,
    };
    win.maximized = true;
    el.classList.add("maximized");
  } else {
    win.maximized = false;
    el.classList.remove("maximized");
    if (win.preMaxRect) {
      el.style.left = win.preMaxRect.left;
      el.style.top = win.preMaxRect.top;
      el.style.width = win.preMaxRect.width;
      el.style.height = win.preMaxRect.height;
    }
  }
  focusWindow(appId);
}

function openApp(appId) {
  if (isMobileLayout()) {
    openMobilePanel(appId);
    return;
  }

  const existing = state.windows.get(appId);
  if (!existing) {
    createWindowForApp(appId);
  } else if (existing.minimized) {
    restoreWindow(appId);
  } else {
    focusWindow(appId);
  }
  updateTaskbar();
}

function updateTaskbar() {
  taskItems.innerHTML = "";
  state.windows.forEach((win, appId) => {
    const app = APPS.find((a) => a.id === appId);
    if (!app) return;

    const item = document.createElement("div");
    item.className = "task-item";
    if (win.minimized) item.classList.add("min");
    if (state.activeAppId === appId) item.classList.add("active");

    const mainBtn = document.createElement("button");
    mainBtn.type = "button";
    mainBtn.className = "task-item-main";
    mainBtn.textContent = `${app.icon} ${app.name}`;
    mainBtn.setAttribute("aria-label", `Focus ${app.name}`);
    mainBtn.addEventListener("click", () => {
      if (win.minimized) restoreWindow(appId);
      else focusWindow(appId);
    });

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "task-item-close";
    closeBtn.setAttribute("aria-label", `Close ${app.name}`);
    closeBtn.textContent = "×";
    closeBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      closeWindow(appId);
    });

    item.appendChild(mainBtn);
    item.appendChild(closeBtn);
    taskItems.appendChild(item);
  });
}

function addDragBehavior(winEl, handleEl, appId) {
  let dragging = false;
  let dx = 0;
  let dy = 0;

  handleEl.addEventListener("mousedown", (event) => {
    const win = state.windows.get(appId);
    if (!win || win.maximized || isMobileLayout()) return;
    if (event.target.closest("button")) return;
    dragging = true;
    const rect = winEl.getBoundingClientRect();
    dx = event.clientX - rect.left;
    dy = event.clientY - rect.top;
    focusWindow(appId);
    event.preventDefault();
  });

  window.addEventListener("mousemove", (event) => {
    if (!dragging) return;
    const desktopRect = document.getElementById("desktop").getBoundingClientRect();
    const maxX = desktopRect.width - 80;
    const maxY = desktopRect.height - 70;
    const x = Math.max(0, Math.min(event.clientX - dx, maxX));
    const y = Math.max(0, Math.min(event.clientY - dy, maxY));
    winEl.style.left = `${x}px`;
    winEl.style.top = `${y}px`;
  });

  window.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false;
    snapWindowToEdges(winEl, appId);
  });
}

function addResizeBehavior(winEl, handleEl, appId) {
  let resizing = false;
  let startX = 0;
  let startY = 0;
  let startW = 0;
  let startH = 0;

  handleEl.addEventListener("mousedown", (event) => {
    const win = state.windows.get(appId);
    if (!win || win.maximized || isMobileLayout()) return;
    resizing = true;
    const rect = winEl.getBoundingClientRect();
    startX = event.clientX;
    startY = event.clientY;
    startW = rect.width;
    startH = rect.height;
    focusWindow(appId);
    event.preventDefault();
  });

  window.addEventListener("mousemove", (event) => {
    if (!resizing) return;
    const desktopRect = document.getElementById("desktop").getBoundingClientRect();
    const newW = Math.min(Math.max(280, startW + (event.clientX - startX)), desktopRect.width);
    const newH = Math.min(Math.max(180, startH + (event.clientY - startY)), desktopRect.height);
    winEl.style.width = `${newW}px`;
    winEl.style.height = `${newH}px`;
  });

  window.addEventListener("mouseup", () => {
    resizing = false;
  });
}

function snapWindowToEdges(winEl, appId) {
  const rect = winEl.getBoundingClientRect();
  const desktopRect = document.getElementById("desktop").getBoundingClientRect();
  const threshold = 18;

  if (rect.top < threshold) {
    const win = state.windows.get(appId);
    if (win && !win.maximized) toggleMaximize(appId);
    return;
  }

  if (rect.left < threshold) {
    winEl.style.left = "0px";
  }
  if (rect.right > desktopRect.width - threshold) {
    winEl.style.left = `${Math.max(0, desktopRect.width - rect.width)}px`;
  }
}

function openMobilePanel(appId) {
  const app = APPS.find((a) => a.id === appId);
  if (!app) return;
  mobileAppView.innerHTML = `
    <article class="mobile-panel" role="region" aria-label="${app.name}">
      <h3>${app.icon} ${app.name}</h3>
      <div>${app.content}</div>
      <button class="mobile-back">Close</button>
    </article>
  `;
  const closeButton = mobileAppView.querySelector(".mobile-back");
  const mobileContent = mobileAppView.querySelector(".mobile-panel > div");
  initAppBehavior(app.id, mobileContent);
  closeButton.addEventListener("click", () => {
    mobileAppView.innerHTML = "";
  });
  closeButton.focus();
}

function initAppBehavior(appId, container) {
  const handlers = {
    notes: initNotesApp,
    calendar: initCalendarApp,
    terminal: initTerminalApp,
    music: initMusicApp,
    photos: initPhotosApp,
    mail: initMailApp,
    weather: initWeatherApp,
    calculator: initCalculatorApp,
    tasks: initTasksApp,
    clockapp: initClockApp,
    nebulasurf: initNebulaSurfApp,
    nebulaforge: initNebulaForgeApp,
    explorer: initExplorerApp,
    settings: initSettingsApp,
  };
  if (handlers[appId]) handlers[appId](container);
}

function initNotesApp(container) {
  const input = container.querySelector("[data-notes-input]");
  const save = container.querySelector("[data-notes-save]");
  const clear = container.querySelector("[data-notes-clear]");
  const status = container.querySelector("[data-notes-status]");
  if (!input || !save || !clear || !status) return;

  input.value = appState.notes;
  save.addEventListener("click", () => {
    appState.notes = input.value;
    localStorage.setItem("nebula.notes", appState.notes);
    status.textContent = "Saved";
  });
  clear.addEventListener("click", () => {
    input.value = "";
    appState.notes = "";
    localStorage.removeItem("nebula.notes");
    status.textContent = "Cleared";
  });
}

function initCalendarApp(container) {
  const title = container.querySelector("[data-cal-title]");
  const grid = container.querySelector("[data-cal-grid]");
  const prev = container.querySelector("[data-cal-prev]");
  const next = container.querySelector("[data-cal-next]");
  if (!title || !grid || !prev || !next) return;

  const render = () => {
    const base = appState.calendarDate;
    const year = base.getFullYear();
    const month = base.getMonth();
    const first = new Date(year, month, 1);
    const totalDays = new Date(year, month + 1, 0).getDate();
    const offset = (first.getDay() + 6) % 7;
    const today = new Date();

    title.textContent = base.toLocaleDateString([], { month: "long", year: "numeric" });
    grid.innerHTML = "";
    ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].forEach((d) => {
      const cell = document.createElement("div");
      cell.className = "cal-cell cal-head";
      cell.textContent = d;
      grid.appendChild(cell);
    });

    for (let i = 0; i < offset; i += 1) {
      const empty = document.createElement("div");
      empty.className = "cal-cell muted";
      grid.appendChild(empty);
    }

    for (let d = 1; d <= totalDays; d += 1) {
      const day = document.createElement("div");
      day.className = "cal-cell";
      day.textContent = String(d);
      if (year === today.getFullYear() && month === today.getMonth() && d === today.getDate()) {
        day.classList.add("today");
      }
      grid.appendChild(day);
    }
  };

  prev.addEventListener("click", () => {
    appState.calendarDate = new Date(appState.calendarDate.getFullYear(), appState.calendarDate.getMonth() - 1, 1);
    render();
  });
  next.addEventListener("click", () => {
    appState.calendarDate = new Date(appState.calendarDate.getFullYear(), appState.calendarDate.getMonth() + 1, 1);
    render();
  });
  render();
}

function initTerminalApp(container) {
  const output = container.querySelector("[data-terminal-output]");
  const form = container.querySelector("[data-terminal-form]");
  const input = container.querySelector("[data-terminal-input]");
  if (!output || !form || !input) return;

  const print = (line) => {
    const p = document.createElement("p");
    p.textContent = line;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
  };

  print("Type `help` for available commands.");
  input.focus();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const cmd = input.value.trim();
    if (!cmd) return;
    print(`elian@nebula % ${cmd}`);

    const [name, ...rest] = cmd.split(" ");
    const arg = rest.join(" ");
    if (name === "help") print("Commands: help, ls, date, echo <msg>, clear");
    else if (name === "ls") print("Desktop  Documents  Downloads  Projects");
    else if (name === "date") print(new Date().toString());
    else if (name === "echo") print(arg || "");
    else if (name === "clear") output.innerHTML = "";
    else print(`Command not found: ${name}`);

    input.value = "";
  });
}

function initMusicApp(container) {
  const track = container.querySelector("[data-music-track]");
  const artist = container.querySelector("[data-music-artist]");
  const status = container.querySelector("[data-music-status]");
  const seek = container.querySelector("[data-music-seek]");
  const time = container.querySelector("[data-music-time]");
  const prev = container.querySelector("[data-music-prev]");
  const play = container.querySelector("[data-music-play]");
  const next = container.querySelector("[data-music-next]");
  if (!track || !artist || !status || !seek || !time || !prev || !play || !next) return;

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const setTrack = (index) => {
    appState.musicIndex = index;
    musicPlayer.src = MUSIC_TRACKS[appState.musicIndex].src;
    musicPlayer.load();
  };

  const render = () => {
    if (!track.isConnected) {
      musicSubscribers.delete(render);
      return;
    }
    const current = MUSIC_TRACKS[appState.musicIndex];
    track.textContent = current.title;
    artist.textContent = current.artist;
    status.textContent = appState.musicPlaying ? "Playing" : "Paused";
    play.textContent = appState.musicPlaying ? "Pause" : "Play";
    const duration = musicPlayer.duration || 0;
    const currentTime = musicPlayer.currentTime || 0;
    seek.value = duration > 0 ? String(Math.round((currentTime / duration) * 100)) : "0";
    time.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
  };

  prev.addEventListener("click", () => {
    const wasPlaying = appState.musicPlaying;
    const newIndex = (appState.musicIndex - 1 + MUSIC_TRACKS.length) % MUSIC_TRACKS.length;
    setTrack(newIndex);
    if (wasPlaying) {
      musicPlayer.play().catch(() => {
        appState.musicPlaying = false;
      });
    }
    render();
  });
  next.addEventListener("click", () => {
    const wasPlaying = appState.musicPlaying;
    const newIndex = (appState.musicIndex + 1) % MUSIC_TRACKS.length;
    setTrack(newIndex);
    if (wasPlaying) {
      musicPlayer.play().catch(() => {
        appState.musicPlaying = false;
      });
    }
    render();
  });
  play.addEventListener("click", () => {
    if (musicPlayer.paused) {
      musicPlayer.play().then(() => {
        appState.musicPlaying = true;
        render();
      }).catch(() => {
        appState.musicPlaying = false;
        status.textContent = "Playback blocked by browser";
        render();
      });
      return;
    }
    musicPlayer.pause();
    appState.musicPlaying = false;
    render();
  });

  seek.addEventListener("input", () => {
    const duration = musicPlayer.duration || 0;
    if (!duration) return;
    const progress = Number(seek.value) / 100;
    musicPlayer.currentTime = duration * progress;
    render();
  });
  musicSubscribers.add(render);
  render();
}

function initPhotosApp(container) {
  const list = container.querySelector("[data-photo-list]");
  const preview = container.querySelector("[data-photo-preview]");
  if (!list || !preview) return;
  list.innerHTML = "";

  const showPreview = (photo) => {
    preview.innerHTML = `
      <img src="${photo.src}" alt="${photo.name}" class="photo-preview-image" />
      <span>${photo.name} - ${photo.meta}</span>
    `;
  };

  appState.photos.forEach((photo) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "photo-tile";
    btn.innerHTML = `
      <img src="${photo.src}" alt="${photo.name}" class="photo-thumb" />
      <span>${photo.name}</span>
    `;
    btn.addEventListener("click", () => {
      showPreview(photo);
    });
    list.appendChild(btn);
  });

  showPreview(appState.photos[0]);
}

function initMailApp(container) {
  const list = container.querySelector("[data-mail-list]");
  const unread = container.querySelector("[data-mail-unread]");
  if (!list || !unread) return;

  const render = () => {
    list.innerHTML = "";
    appState.mail.forEach((item, index) => {
      const row = document.createElement("li");
      row.className = item.unread ? "unread" : "";
      row.innerHTML = `<strong>${item.from}:</strong> ${item.subject}`;
      const action = document.createElement("button");
      action.type = "button";
      action.textContent = item.unread ? "Mark read" : "Mark unread";
      action.addEventListener("click", () => {
        appState.mail[index].unread = !appState.mail[index].unread;
        render();
      });
      row.appendChild(action);
      list.appendChild(row);
    });
    unread.textContent = `Unread: ${appState.mail.filter((m) => m.unread).length}`;
  };

  render();
}

function initWeatherApp(container) {
  const now = container.querySelector("[data-weather-now]");
  const tonight = container.querySelector("[data-weather-tonight]");
  const tomorrow = container.querySelector("[data-weather-tomorrow]");
  const toggle = container.querySelector("[data-weather-toggle]");
  const refresh = container.querySelector("[data-weather-refresh]");
  if (!now || !tonight || !tomorrow || !toggle || !refresh) return;

  const toUnit = (celsius) => {
    if (appState.weatherCelsius) return `${celsius}°C`;
    return `${Math.round((celsius * 9) / 5 + 32)}°F`;
  };

  const render = () => {
    now.textContent = `Now: ${toUnit(appState.weather.now)}, ${appState.weather.condition}`;
    tonight.textContent = `Tonight: ${toUnit(appState.weather.tonight)}, Clear skies`;
    tomorrow.textContent = `Tomorrow: ${toUnit(appState.weather.tomorrow)}, Light breeze`;
    toggle.textContent = appState.weatherCelsius ? "Switch to °F" : "Switch to °C";
  };

  toggle.addEventListener("click", () => {
    appState.weatherCelsius = !appState.weatherCelsius;
    render();
  });
  refresh.addEventListener("click", () => {
    appState.weather.now = 15 + Math.floor(Math.random() * 8);
    appState.weather.tonight = 9 + Math.floor(Math.random() * 5);
    appState.weather.tomorrow = 16 + Math.floor(Math.random() * 8);
    render();
  });
  render();
}

function initExplorerApp(container) {
  const filesEl = container.querySelector("[data-files]");
  const folderButtons = container.querySelectorAll("[data-folder]");
  if (!filesEl || !folderButtons.length) return;
  const folders = {
    documents: ["Resume.pdf", "Case-Study-Design.md", "Presentation.key"],
    downloads: ["Wallpapers.zip", "NebulaOS-Prototype.fig", "Invoice-March.pdf"],
    media: ["Intro-Video.mp4", "Brand-Kit.ai", "Moodboard.png"],
  };

  const render = (folder) => {
    filesEl.innerHTML = "";
    folders[folder].forEach((file) => {
      const li = document.createElement("li");
      li.textContent = file;
      filesEl.appendChild(li);
    });
  };

  folderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      render(button.dataset.folder);
    });
  });
  render("documents");
}

function initSettingsApp(container) {
  const themeToggle = container.querySelector("#theme-toggle");
  const animToggle = container.querySelector("#anim-toggle");
  const status = container.querySelector("[data-settings-status]");
  if (!themeToggle || !animToggle || !status) return;

  const setStatus = () => {
    const theme = themeToggle.checked ? "High Contrast" : "Dark Nebula";
    const anim = animToggle.checked ? "enabled" : "disabled";
    status.textContent = `Current: ${theme}, animations ${anim}.`;
  };

  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("contrast-theme", themeToggle.checked);
    setStatus();
  });
  animToggle.addEventListener("change", () => {
    document.body.classList.toggle("reduce-anim", !animToggle.checked);
    setStatus();
  });
  setStatus();
}

function initCalculatorApp(container) {
  const display = container.querySelector("[data-calc-display]");
  const grid = container.querySelector("[data-calc-grid]");
  if (!display || !grid) return;
  let expression = "0";

  const refresh = () => {
    display.value = expression;
  };

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-calc]");
    if (!button) return;
    const value = button.getAttribute("data-calc");

    if (value === "C") {
      expression = "0";
      refresh();
      return;
    }

    if (value === "=") {
      try {
        expression = String(Function(`"use strict"; return (${expression});`)());
      } catch {
        expression = "Error";
      }
      refresh();
      return;
    }

    if (expression === "0" || expression === "Error") expression = value;
    else expression += value;
    refresh();
  });
}

function initTasksApp(container) {
  const form = container.querySelector("[data-task-form]");
  const input = container.querySelector("[data-task-input]");
  const list = container.querySelector("[data-task-list]");
  if (!form || !input || !list) return;

  const save = () => localStorage.setItem("nebula.tasks", JSON.stringify(appState.tasks));
  const render = () => {
    list.innerHTML = "";
    appState.tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = "task-item-row";

      const text = document.createElement("span");
      text.textContent = task;
      li.appendChild(text);

      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "Done";
      remove.addEventListener("click", () => {
        appState.tasks.splice(index, 1);
        save();
        render();
      });
      li.appendChild(remove);
      list.appendChild(li);
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    appState.tasks.push(value);
    input.value = "";
    save();
    render();
  });

  render();
}

function initClockApp(container) {
  const readout = container.querySelector("[data-clock-readout]");
  const start = container.querySelector("[data-clock-start]");
  const stop = container.querySelector("[data-clock-stop]");
  const reset = container.querySelector("[data-clock-reset]");
  if (!readout || !start || !stop || !reset) return;

  let startAt = 0;
  let elapsed = 0;
  let timer = null;

  const render = () => {
    const totalMs = timer ? elapsed + (Date.now() - startAt) : elapsed;
    const mins = Math.floor(totalMs / 60000);
    const secs = Math.floor((totalMs % 60000) / 1000);
    const tenths = Math.floor((totalMs % 1000) / 100);
    readout.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}.${tenths}`;
  };

  start.addEventListener("click", () => {
    if (timer) return;
    startAt = Date.now();
    timer = setInterval(() => {
      if (!container.isConnected) {
        clearInterval(timer);
        timer = null;
        return;
      }
      render();
    }, 100);
  });

  stop.addEventListener("click", () => {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
    elapsed += Date.now() - startAt;
    render();
  });

  reset.addEventListener("click", () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    elapsed = 0;
    startAt = 0;
    render();
  });

  render();
}

function getSurfBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(SURF_BOOKMARKS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveSurfBookmarks(list) {
  localStorage.setItem(SURF_BOOKMARKS_KEY, JSON.stringify(list));
}

function normalizeSurfUrl(raw) {
  const s = raw.trim();
  if (!s || s === "nebula://home") return NEBULA_SURF_WELCOME;
  if (s.startsWith("data:")) return s;
  if (/^https?:\/\//i.test(s)) return s;
  if (s.includes(".") && !/\s/.test(s)) return `https://${s}`;
  return s;
}

function initNebulaSurfApp(container) {
  const iframe = container.querySelector("[data-surf-frame]");
  const urlInput = container.querySelector("[data-surf-url]");
  const back = container.querySelector("[data-surf-back]");
  const forward = container.querySelector("[data-surf-forward]");
  const refresh = container.querySelector("[data-surf-refresh]");
  const home = container.querySelector("[data-surf-home]");
  const go = container.querySelector("[data-surf-go]");
  const bookmarkBtn = container.querySelector("[data-surf-bookmark]");
  const bookmarksEl = container.querySelector("[data-surf-bookmarks]");
  if (!iframe || !urlInput || !back || !forward || !refresh || !home || !go || !bookmarkBtn || !bookmarksEl) return;

  let history = [NEBULA_SURF_WELCOME];
  let histIdx = 0;

  const displayUrlForBar = (url) => {
    urlInput.value = url === NEBULA_SURF_WELCOME ? "nebula://home" : url;
  };

  const loadAtIndex = () => {
    const url = history[histIdx];
    displayUrlForBar(url);
    iframe.src = url;
  };

  const navigateTo = (url) => {
    history = history.slice(0, histIdx + 1);
    history.push(url);
    histIdx = history.length - 1;
    loadAtIndex();
  };

  const renderBookmarks = () => {
    const list = getSurfBookmarks();
    bookmarksEl.innerHTML = "";
    if (!list.length) return;
    const label = document.createElement("p");
    label.className = "nebula-browser-hint";
    label.textContent = "Bookmarks";
    bookmarksEl.appendChild(label);
    const row = document.createElement("div");
    row.className = "surf-bookmark-row";
    list.forEach((entry) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = entry.title || entry.url;
      b.addEventListener("click", () => navigateTo(entry.url));
      row.appendChild(b);
    });
    bookmarksEl.appendChild(row);
  };

  back.addEventListener("click", () => {
    if (histIdx > 0) {
      histIdx -= 1;
      loadAtIndex();
    }
  });
  forward.addEventListener("click", () => {
    if (histIdx < history.length - 1) {
      histIdx += 1;
      loadAtIndex();
    }
  });
  refresh.addEventListener("click", () => {
    iframe.src = iframe.src;
  });
  home.addEventListener("click", () => navigateTo(NEBULA_SURF_WELCOME));
  go.addEventListener("click", () => navigateTo(normalizeSurfUrl(urlInput.value)));
  urlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") navigateTo(normalizeSurfUrl(urlInput.value));
  });
  bookmarkBtn.addEventListener("click", () => {
    const url = normalizeSurfUrl(urlInput.value);
    const title = url === NEBULA_SURF_WELCOME ? "Nebula home" : urlInput.value.trim() || url;
    const list = getSurfBookmarks();
    if (!list.some((b) => b.url === url)) {
      list.push({ title, url });
      saveSurfBookmarks(list);
    }
    renderBookmarks();
  });

  loadAtIndex();
  renderBookmarks();
}

function initNebulaForgeApp(container) {
  const editor = container.querySelector("[data-forge-editor]");
  const status = container.querySelector("[data-forge-status]");
  const saveBtn = container.querySelector("[data-forge-save]");
  const clearBtn = container.querySelector("[data-forge-clear]");
  const downloadBtn = container.querySelector("[data-forge-download]");
  if (!editor || !status || !saveBtn || !clearBtn || !downloadBtn) return;

  editor.value = localStorage.getItem(FORGE_STORAGE_KEY) || "";

  saveBtn.addEventListener("click", () => {
    localStorage.setItem(FORGE_STORAGE_KEY, editor.value);
    status.textContent = "Saved to this browser.";
  });
  clearBtn.addEventListener("click", () => {
    editor.value = "";
    localStorage.removeItem(FORGE_STORAGE_KEY);
    status.textContent = "Cleared.";
  });
  downloadBtn.addEventListener("click", () => {
    const blob = new Blob([editor.value], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "nebula-forge.txt";
    a.click();
    URL.revokeObjectURL(a.href);
    status.textContent = "Download started.";
  });
}

function tickClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!launcher.classList.contains("hidden")) {
        launcher.classList.add("hidden");
        return;
      }
      if (state.activeAppId) closeWindow(state.activeAppId);
      if (mobileAppView.innerHTML.trim()) mobileAppView.innerHTML = "";
    }
  });
}

function setupLauncher() {
  startBtn.addEventListener("click", () => {
    launcher.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    if (!launcher.contains(event.target) && event.target !== startBtn) {
      launcher.classList.add("hidden");
    }
  });
}

function setupBootScreen(onDone) {
  setTimeout(() => {
    bootScreen.classList.add("hidden");
    if (typeof onDone === "function") onDone();
  }, 1000);
}

function init() {
  if (isAuthenticated()) {
    document.body.classList.add("nebula-authenticated");
  }
  syncLoginFormsVisibility();
  setupAuthUI();
  renderDesktopAndLauncher();
  tickClock();
  setInterval(tickClock, 1000 * 20);
  setupLauncher();
  setupKeyboardShortcuts();
  setupBootScreen(() => {
    if (!isAuthenticated() && loginScreen) {
      loginScreen.classList.remove("hidden");
    }
  });
}

init();
