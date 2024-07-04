import { useShopStore } from '../../store/shoppingStore';

export default function PaginationFooter() {
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
    <div className="px-5 py-3 border-t relative">
      <div className="flex flex-row justify-center items-center gap-8">
        <div className="border rounded-full w-12 h-12 flex justify-center">
          <p
            className="self-center cursor-pointer"
            onClick={() => handlePagination('prev')}
          >
            왼
          </p>
        </div>
        <div className="w-40 text-center">
          <span className="text-unique">
            {headerMenu.map(
              (content) =>
                content.id === selected &&
                (content.id <= 2 ? `${content.title}아이템` : content.title)
            )}
          </span>
          <span> 더보기 </span>
          <span className="text-commerceCurrent">{currentPage}</span>
          <span className="text-commerce">
            /
            {headerMenu.map(
              (content) => content.id === selected && content.totalPage
            )}
          </span>
        </div>
        <div className="border rounded-full w-12 h-12 flex justify-center">
          <p
            className="self-center cursor-pointer"
            onClick={() => handlePagination('next')}
          >
            오른
          </p>
        </div>
      </div>
      <div className="absolute right-5 top-0 h-full flex">
        <p
          className="px-2 text-commerceCurrent self-center
         border border-adColor rounded"
        >
          AD
        </p>
      </div>
    </div>
  );
}
