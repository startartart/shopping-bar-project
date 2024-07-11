import { useState } from 'react';

const liveData = [
  {
    id: 1,
    label: '어제인기',
    discount: '16%',
    view: 683232,
    price: 199000,
    title: '루메나 무소음 BLDC 무선 선풍',
    subTitle: '브랜드데이 기념, 루메나 쇼핑라이브️',
    img: '',
    video: '',
  },
  {
    id: 2,
    label: '오늘인기',
    discount: '42%',
    view: 923213,
    price: 66000,
    title: '하이뮨 프로틴 밸런스 액티브 25',
    subTitle: '하이뮨 썸머위크',
    img: '',
    video: '',
  },
  {
    id: 3,
    label: '인기라이브',
    discount: '29%',
    view: 554442,
    price: 69850,
    title: '루메나 무소음 BLDC 무선 선풍',
    subTitle: '[내일뭐입지]룩캐스트 24신상 최대 혜택 라이브',
    img: '',
    video: '',
  },
  {
    id: 4,
    label: '오늘인기',
    discount: '42%',
    view: 923213,
    price: 66000,
    title: '하이뮨 프로틴 밸런스 액티브 25',
    subTitle: '하이뮨 썸머위크',
    img: '',
    video: '',
  },
  {
    id: 5,
    label: '인기라이브',
    discount: '29%',
    view: 554442,
    price: 69850,
    title: '루메나 무소음 BLDC 무선 선풍',
    subTitle: '[내일뭐입지]룩캐스트 24신상 최대 혜택 라이브',
    img: '',
    video: '',
  },
  {
    id: 6,
    label: '어제인기',
    discount: '16%',
    view: 683232,
    price: 199000,
    title: '루메나 무소음 BLDC 무선 선풍',
    subTitle: '브랜드데이 기념, 루메나 쇼핑라이브️',
    img: '',
    video: '',
  },
];
export default function ShoppingLiveArea() {
  const [current, setCurrent] = useState(1);

  const currentData = liveData.find((item) => item.id === current);

  return (
    <div className="flex basis-2/3 gap-4">
      <div className="flex flex-col gap-3">
        <div className="relative w-60 h-80 border rounded">
          <div className="absolute left-2 top-2 border rounded-full px-2 py-1 bg-label text-white">
            <p>523,220명 시청</p>
          </div>
          <img src="" alt="" />
          <div
            className="absolute right-4 bottom-4 border rounded-full
          w-8 h-8 bg-label"
          ></div>
        </div>
        <div className="flex gap-3 w-60">
          <div className="w-12 h-12 border rounded">
            <img src="" alt="" />
          </div>
          <div>
            <p className="line-clamp-1">{currentData?.title}</p>
            <span className="text-liveNews font-bold">
              {currentData?.discount}
            </span>
            <span className="font-bold">{currentData?.price}원</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {liveData.map((item) => {
          return (
            <div key={item.id} className="relative w-24">
              <div
                className="absolute left-2 top-2 border rounded-full text-sm
              bg-label text-white font-bold"
              >
                <p className="px-2">{item.label}</p>
              </div>
              <div className="h-32 border rounded">
                <img src="" alt="" />
              </div>
              <div>
                <span className="line-clamp-2">{item.subTitle}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
