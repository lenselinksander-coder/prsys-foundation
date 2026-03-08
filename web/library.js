// web/library.js — Pantone-waaier UI logic

const CATEGORY_COLORS = {
  legal:        "#1B3A6B",
  ethics:       "#C8A97E",
  policy:       "#7A8C99",
  cases:        "#D97B00",
  education:    "#4C8C4A",
  architecture: "#5C4A8C",
  governance:   "#2E7D8C",
  orfheuss:     "#8C1A1A",
};

const CATEGORY_LABELS = {
  legal:        "Recht",
  ethics:       "Ethiek",
  policy:       "Beleid",
  cases:        "Casussen",
  education:    "Onderwijs",
  architecture: "Architectuur",
  governance:   "Governance",
  orfheuss:     "Orfheuss",
};

let indexData = {};
let activeCategory = null;

async function loadIndex() {
  try {
    const res = await fetch("../foundation/library/index.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    indexData = await res.json();
  } catch {
    // index.json not yet built — show empty state
    indexData = {};
  }
}

function buildNav() {
  const nav = document.getElementById("category-nav");
  nav.innerHTML = "";

  const categories = Object.keys(CATEGORY_COLORS);
  for (const cat of categories) {
    const btn = document.createElement("button");
    btn.className = "category-nav__btn";
    btn.dataset.cat = cat;
    btn.textContent = CATEGORY_LABELS[cat] || cat;
    btn.addEventListener("click", () => selectCategory(cat));
    nav.appendChild(btn);
  }
}

function selectCategory(cat) {
  activeCategory = cat;

  // Update active state on buttons
  document.querySelectorAll(".category-nav__btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === cat);
  });

  renderDocs(cat);
}

function renderDocs(cat) {
  const grid = document.getElementById("doc-grid");
  const empty = document.getElementById("empty-state");
  const docs = indexData[cat] || [];

  grid.innerHTML = "";

  if (docs.length === 0) {
    grid.hidden = true;
    empty.hidden = false;
    empty.querySelector("p").textContent =
      `Geen documenten in categorie "${CATEGORY_LABELS[cat] || cat}". ` +
      `Voeg bestanden toe via foundation/import/ en draai import-docs.mjs.`;
    return;
  }

  empty.hidden = true;
  grid.hidden = false;

  const color = CATEGORY_COLORS[cat] || "#888";

  for (const doc of docs) {
    const card = document.createElement("article");
    card.className = "doc-card";
    card.style.setProperty("--card-color", color);

    card.innerHTML = `
      <div class="doc-card__title">${escapeHtml(doc.title)}</div>
      <div class="doc-card__meta">${escapeHtml(doc.ext.replace(".", "").toUpperCase())}</div>
      <span class="doc-card__badge">${escapeHtml(cat)}</span>
    `;

    grid.appendChild(card);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function init() {
  await loadIndex();
  buildNav();
}

init();
