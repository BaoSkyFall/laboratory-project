export interface MenuPath {
  code: string;
  title: string;
  path: string;
  showMenu: boolean;
  level?: number;
  icon?: string;

  childList?: MenuPath[];
  openChild?: boolean;
  authGuard?: boolean;
  isActive?: boolean;

  roles?: any[];
  showGroup?: string;
  modules?: string[];
  parentList?: MenuPath[];
  parentTitle?: string;
  height?: number;
  tempId?: string;

  translatedTitle?: string;

  order?: number;
}
