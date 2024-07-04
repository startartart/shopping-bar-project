import { create } from 'zustand';
import { shoppingState } from './shoppingStore.types';

export const useShopStore = create<shoppingState>((set) => ({
  headerMenu: [
    {
      id: 1,
      title: '쇼핑',
      totalPage: 13,
      isPaginationBar: true,
    },
    {
      id: 2,
      title: '맨즈',
      totalPage: 7,
      isPaginationBar: true,
    },
    {
      id: 3,
      title: '원쁠딜',
      totalPage: 12,
      isPaginationBar: false,
    },
    {
      id: 4,
      title: '쇼핑라이브',
      totalPage: 7,
      isPaginationBar: false,
    },
  ],
  selected: 1,
  currentPage: 1,

  changeSelected: (selected) =>
    set((state) => ({
      ...state,
      selected: selected,
      currentPage: 1,
    })),

  pagination: (nextPage) =>
    set((state) => ({
      ...state,
      currentPage: nextPage,
    })),
}));
