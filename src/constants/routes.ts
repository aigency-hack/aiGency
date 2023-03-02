type RouteKey = "FOOTER_HIDDEN" | "SIDEBAR_HIDDEN";

export enum Route {
  HOME = "/",
}

export const Routes: Record<RouteKey, (Route | RegExp | string)[]> = {
  FOOTER_HIDDEN: [],
  SIDEBAR_HIDDEN: [],
};
