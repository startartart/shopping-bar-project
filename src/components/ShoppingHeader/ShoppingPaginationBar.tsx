import { MenuTypes } from '../../types/shopping.types';

type ShoppingHeaderProps = {
  headerMenu: MenuTypes[];
  handlePagination: (direction: string) => void;
  selected: number;
  currentPage: number;
};

export default function ShoppingPaginationBar({
  headerMenu,
  handlePagination,
  selected,
  currentPage,
}: ShoppingHeaderProps) {
  return (
    <div className="flex flex-row items-center gap-2.5">
      <div>
        <span className="text-commerceCurrent">{currentPage}</span>
        <span className="text-commerce">
          /
          {headerMenu.map(
            (content) => content.id === selected && content.totalPage
          )}
        </span>
      </div>
      <div>
        <button
          className="p-1 w-8 h-8 border-solid
          border border-customColor rounded-tl rounded-bl
          text-button hover:text-titleSelected"
          onClick={() => handlePagination('prev')}
        >
          {'<'}
        </button>
        <button
          className="p-1 w-8 h-8 border-solid
          border border-customColor rounded-tr rounded-br
          text-button hover:text-titleSelected"
          onClick={() => handlePagination('next')}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}
