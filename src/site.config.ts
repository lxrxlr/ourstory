const dayMs = 24 * 60 * 60 * 1000;

export const siteConfig = {
  copyright: "© 2026 story.lxrme.com All rights reserved.",
  heroMedia: {
    image: "/assets/photos/20260712/IMG_20260712_142937.jpg",
    caption: "2026.7.12"
  },
  relationship: {
    startDate: "2025-5-8",
  },
} as const;

export function getTogetherDays(referenceDate = new Date()) {
  const [year, month, day] = siteConfig.relationship.startDate.split("-").map(Number);
  const start = Date.UTC(year, month - 1, day);
  const current = Date.UTC(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate(),
  );

  return Math.max(1, Math.floor((current - start) / dayMs) + 1);
}

export function formatDateLabel(date = siteConfig.relationship.startDate) {
  return date.replaceAll("-", ".");
}
