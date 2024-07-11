import { useShopStore } from '../../../store/shoppingStore';
import PaginationMainBar from './PaginationMainBar';

const onePluseDealNav = [
  {
    id: 1,
    move: 1,
    name: 'HOT',
  },
  {
    id: 2,
    move: 6,
    name: '식품',
  },
  {
    id: 3,
    move: 8,
    name: '생활·육아',
  },
  {
    id: 4,
    move: 9,
    name: '패션소호',
  },
  {
    id: 5,
    move: 10,
    name: '디지털',
  },
  {
    id: 6,
    move: 11,
    name: '패션뷰티',
  },
  {
    id: 7,
    move: 12,
    name: '오픈예정',
  },
];

const shoppingLiveNav = [
  {
    id: 1,
    move: 1,
    name: '네쇼라Pick',
  },
  {
    id: 2,
    move: 2,
    name: '패션',
  },
  {
    id: 3,
    move: 3,
    name: '뷰티',
  },
  {
    id: 4,
    move: 4,
    name: '푸드',
  },
  {
    id: 5,
    move: 5,
    name: '라이프/테크',
  },
  {
    id: 6,
    move: 6,
    name: '키즈',
  },
  {
    id: 7,
    move: 7,
    name: '취미/여행/문화',
  },
];
export default function TodayPickArea() {
  const { selected } = useShopStore();
  return (
    <div
      className="mx-5 my-3 px-5 py-3 bg-todayPick
    flex flex-row items-center gap-2 text-lg font-medium"
    >
      {selected <= 2 ? (
        <>
          <span className="font-bold">오늘의 혜택</span>
          <span className="inline-block w-1 h-1 rounded-full bg-dot"></span>
          <span>Logo</span>
          <span className="hover:underline">
            7/4~7/10 7월 혜택이 무려{' '}
            <span className="text-unique">50% 세일</span> 이랍니다.
          </span>
        </>
      ) : (
        <PaginationMainBar
          list={selected === 3 ? onePluseDealNav : shoppingLiveNav}
        />
      )}
    </div>
  );
}
