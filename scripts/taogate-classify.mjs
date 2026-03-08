// scripts/taogate-classify.mjs

const CATEGORY = {
  LAW: "legal",
  ETHICS: "ethics",
  POLICY: "policy",
  CASES: "cases",
  EDUCATION: "education",
  ARCHITECTURE: "architecture",
  GOVERNANCE: "governance",
  ORFHEUSS: "orfheuss",
};

export async function taogateClassify({ title, text }) {
  const t = `${title} ${text}`.toLowerCase();

  // Deep Blue – The Law
  if (
    t.includes("regulation") ||
    t.includes("directive") ||
    t.includes("act") ||
    t.includes("liability") ||
    t.includes("court")
  ) {
    return {
      category: CATEGORY.LAW,
      tags: ["law"],
      confidence: 0.9,
      reasoning: "Mentions legal concepts, regulations or court context.",
    };
  }

  // Warm Sand – The Ethics
  if (
    t.includes("ethics") ||
    t.includes("moral") ||
    t.includes("values") ||
    t.includes("human dignity")
  ) {
    return {
      category: CATEGORY.ETHICS,
      tags: ["ethics"],
      confidence: 0.85,
      reasoning: "Focus on ethical principles and values.",
    };
  }

  // Cool Grey – The Policy
  if (
    t.includes("policy") ||
    t.includes("governance") ||
    t.includes("framework") ||
    t.includes("guideline")
  ) {
    return {
      category: CATEGORY.POLICY,
      tags: ["policy"],
      confidence: 0.8,
      reasoning: "Describes organisational governance or policy frameworks.",
    };
  }

  // Amber – The Cases
  if (t.includes("case study") || t.includes("scenario") || t.includes("jurisprudence")) {
    return {
      category: CATEGORY.CASES,
      tags: ["cases"],
      confidence: 0.8,
      reasoning: "Contains concrete cases or jurisprudence.",
    };
  }

  // Default – zet je later scherper
  return {
    category: CATEGORY.GOVERNANCE,
    tags: [],
    confidence: 0.5,
    reasoning: "Default governance/other; requires manual steward check.",
  };
}
