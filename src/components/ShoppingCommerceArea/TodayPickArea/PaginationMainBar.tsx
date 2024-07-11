import { useShopStore } from '../../../store/shoppingStore';
import { Fragment } from 'react/jsx-runtime';

type NavType = {
  id: number;
  move: number;
  name: string;
};
type PaginationMainBarProps = {
  list: NavType[];
};

export default function PaginationMainBar({ list }: PaginationMainBarProps) {
  const { currentPage, pagination } = useShopStore();

  const boldItemId = list.reduce((acc, nav) => {
    if (currentPage >= nav.move) return nav;
    return acc;
  }, list[0]).id;

  const handleNavigate = (move: number) => {
    pagination(move);
  };
  return (
    <>
      {list.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <span
              className={
                boldItemId === item.id
                  ? 'font-extrabold	hover:underline cursor-pointer text-navNameActive'
                  : 'font-semibold hover:underline cursor-pointer text-navName'
              }
              onClick={() => handleNavigate(item.move)}
            >
              {item.name}
            </span>
            {index !== list.length - 1 && (
              <span className="inline-block w-1 h-1 rounded-full bg-dot text-navName"></span>
            )}
          </Fragment>
        );
      })}
    </>
  );
}
