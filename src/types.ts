import type { RouteLocationRaw } from "vue-router";

export type Locale = "en" | "fr";

export interface NavLink {
  key: string;
  to: RouteLocationRaw;
}

export interface Project {
  key: string;
  name: string;
  status: "live" | "wip" | "archived";
  tags: string[];
  year: number;
  url?: string | undefined;
}

export interface FactRow {
  label: string;
  value: string;
}

export type WatchTopic = "coding" | "iot" | "native";
