import { MenuTypes } from '../types/shopping.types';

export type shoppingState = {
  headerMenu: MenuTypes[];
  selected: number;
  currentPage: number;

  changeSelected: (selected: number) => void;
  pagination: (nextPage: number) => void;
};
