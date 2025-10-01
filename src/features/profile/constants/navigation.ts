import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Award,
  Calendar,
  Code,
  Heart,
  History,
  Link as LinkIcon,
  Mail,
  Scroll,
} from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export const navigationItems: NavItem[] = [
  {
    id: "links",
    label: "Links",
    icon: LinkIcon,
  },
  {
    id: "current-status",
    label: "いまやっていること",
    icon: Activity,
  },
  {
    id: "wishes",
    label: "願い",
    icon: Scroll,
  },
  {
    id: "contact",
    label: "連絡先",
    icon: Mail,
  },
  {
    id: "history",
    label: "略歴",
    icon: History,
  },
  {
    id: "skills",
    label: "できること",
    icon: Code,
  },
  {
    id: "awards",
    label: "賞罰",
    icon: Award,
  },
  {
    id: "favorites",
    label: "好きなもの",
    icon: Heart,
  },
  {
    id: "memorable-events",
    label: "印象的な出来事",
    icon: Calendar,
  },
];
