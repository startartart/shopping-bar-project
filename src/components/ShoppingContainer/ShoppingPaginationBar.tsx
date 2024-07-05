import { useShopStore } from '../../store/shoppingStore';

export default function ShoppingPaginationBar() {
  const { headerMenu, currentPage, selected, pagination } = useShopStore();

  const handlePagination = (direction: string) => {
    const currentTotalPage = headerMenu.find(
      (content) => content.id === selected
    )?.totalPage;

    if (!currentTotalPage) return;

    if (direction === 'next') {
      if (currentTotalPage < currentPage + 1) pagination(1);
      else pagination(currentPage + 1);
    }
    if (direction === 'prev') {
      if (0 >= currentPage - 1) pagination(currentTotalPage);
      else pagination(currentPage - 1);
    }
  };

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
