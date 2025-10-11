// === Theme handling with persistence ===
const themeBtn = document.getElementById("themeBtn");
const html = document.documentElement;
const THEME_KEY = "wc-theme-v1";
function setTheme(mode) {
  html.setAttribute("data-theme", mode);
  themeBtn.textContent = mode === "dark" ? "🌙 Dark" : "🌞 Light";
  localStorage.setItem(THEME_KEY, mode);
}
const saved = localStorage.getItem(THEME_KEY);
setTheme(
  saved ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
);
themeBtn.addEventListener("click", () =>
  setTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark")
);
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "t")
    setTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

// === Core counting logic ===
const el = {
  text: document.getElementById("text"),
  words: document.getElementById("words"),
  chars: document.getElementById("chars"),
  unique: document.getElementById("unique"),
  freqBody: document.getElementById("freqBody"),
  topN: document.getElementById("topN"),
};

// Unicode-aware cleanup: remove punctuation, keep letters, marks, numbers, whitespace
// Explanation: [^\p{L}\p{M}\p{N}\s] -> NOT Letter/Mark/Number/Whitespace
const PUNCTUATION_CLEAN_RE = /[^\p{L}\p{M}\p{N}\s]/gu;
const WHITESPACE_SPLIT_RE = /\s+/u;

function analyze(raw) {
  const normalized = (raw || "").normalize("NFKC");
  const cleaned = normalized.replace(PUNCTUATION_CLEAN_RE, " ");
  const trimmed = cleaned.trim();
  const chars = trimmed.length; // after trim (but before lowercasing)
  if (!trimmed) {
    return { chars: 0, wordCount: 0, uniqueCount: 0, words: [], freq: [] };
  }
  const words = trimmed.split(WHITESPACE_SPLIT_RE).map((w) => w.toLowerCase());
  const wordCount = words.length;
  const map = Object.create(null);
  for (const w of words) {
    map[w] = (map[w] || 0) + 1;
  }
  const uniqueCount = Object.keys(map).length;
  // build sorted frequency array: [word, count, pct]
  const freq = Object.entries(map)
    .map(([w, c]) => [w, c, (c / wordCount) * 100])
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  return { chars, wordCount, uniqueCount, words, freq };
}

function render(result) {
  el.words.textContent = result.wordCount.toLocaleString();
  el.chars.textContent = result.chars.toLocaleString();
  el.unique.textContent = result.uniqueCount.toLocaleString();

  // Frequencies
  const N = Math.max(1, Math.min(100, parseInt(el.topN.value || "10", 10)));
  el.topN.value = N;
  if (result.freq.length === 0) {
    el.freqBody.innerHTML =
      '<tr><td colspan="3" class="muted">No data yet.</td></tr>';
    return;
  }
  const rows = result.freq
    .slice(0, N)
    .map(
      ([w, c, p]) => `
          <tr>
            <td>${escapeHtml(w)}</td>
            <td>${c}</td>
            <td>${p.toFixed(1)}%</td>
          </tr>`
    )
    .join("");
  el.freqBody.innerHTML = rows;
}

// Minimal HTML escaping for table cells
function escapeHtml(s) {
  return s.replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        ch
      ])
  );
}

// Debounced live update to avoid over-render on huge paste
let t = 0;
function scheduleUpdate() {
  clearTimeout(t);
  t = setTimeout(() => render(analyze(el.text.value)), 60);
}

el.text.addEventListener("input", scheduleUpdate);
el.topN.addEventListener("input", scheduleUpdate);

// Seed example (optional):
el.text.value = "";
scheduleUpdate();
