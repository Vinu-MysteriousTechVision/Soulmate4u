import { DrawerMenuEnum, DrawerMenuSectionEnum } from '../constants'
import { IDrawerMenuItem, IDrawerMenuSectoionItem } from './drawer.menuList'

export const home: IDrawerMenuItem = {
  id: DrawerMenuEnum.Home,
  name: 'Home',
  iconSource: require('../res/images/drawer/menuItemIcon.png'),
}

export const pastTestResults: IDrawerMenuItem = {
  id: DrawerMenuEnum.ViewPastTestResults,
  name: 'Settings',
  iconSource: require('../res/images/drawer/menuItemIcon.png'),
}
export const content: IDrawerMenuItem = {
  id: DrawerMenuEnum.Content,
  name: 'Logout',
  iconSource: require('../res/images/drawer/menuItemIcon.png'),
}
export const MENU_SECTIONS: IDrawerMenuSectoionItem[] = [
  {
    title: DrawerMenuSectionEnum.Section_1,
    data: [home, pastTestResults, content],
  },
  { title: DrawerMenuSectionEnum.Section_2, data: [] },
]
