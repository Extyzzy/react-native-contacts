export enum TABS {
  ALL = "ALL",
  FAMILY = "FAMILY",
  FRIENDS = "FRIENDS",
  WORK = "WORK",
}

export type TabsParams = {
  [TABS.ALL]: undefined;
  [TABS.FAMILY]: undefined;
  [TABS.FRIENDS]: undefined;
  [TABS.WORK]: undefined;
};
