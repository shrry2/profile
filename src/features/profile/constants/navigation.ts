export type NavItem = {
  id: string;
  label: string;
  pillLabel?: string;
  showInPill: boolean;
};

export const navigationItems: NavItem[] = [
  {
    id: "links",
    label: "Links",
    pillLabel: "リンク",
    showInPill: true,
  },
  {
    id: "current-status",
    label: "いまやっていること",
    pillLabel: "いま",
    showInPill: true,
  },
  {
    id: "wishes",
    label: "願い",
    showInPill: false,
  },
  {
    id: "contact",
    label: "連絡先",
    pillLabel: "連絡先",
    showInPill: true,
  },
  {
    id: "history",
    label: "略歴",
    pillLabel: "略歴",
    showInPill: true,
  },
  {
    id: "skills",
    label: "できること",
    pillLabel: "スキル",
    showInPill: true,
  },
  {
    id: "awards",
    label: "賞罰",
    showInPill: false,
  },
  {
    id: "favorites",
    label: "好きなもの",
    pillLabel: "好き",
    showInPill: true,
  },
  {
    id: "memorable-events",
    label: "印象的な出来事",
    showInPill: false,
  },
];
