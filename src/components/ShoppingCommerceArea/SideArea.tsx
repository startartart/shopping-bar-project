import { useShopStore } from '../../store/shoppingStore';

const moleHotDealData = [
  {
    id: 1,
    label: '핫딜',
    discount: '62%',
    price: 8960,
    title: '',
    hotTitle: '상의+하의2종SET 잠옷 8천원대야!',
    img: '',
  },
  {
    id: 2,
    label: '핫딜',
    discount: '67%',
    price: 36000,
    title: '',
    hotTitle: '엘리자베스아덴~ 앱쿠폰2만원대야',
    img: '',
  },
  {
    id: 3,
    label: '핫딜',
    discount: '40%',
    price: 24870,
    title: '',
    hotTitle: '스팸이가격맞아? 40%놓치면후회해',
    img: '',
  },
];

const nextLiveData = [
  {
    id: 1,
    title: '[LG슈퍼럭키세일] 세탁기건조기 세트, 제습기 특가!',
    shop: 'LG전자인증점 삼정',
    date: '7월 11일 14:00',
    img: '',
  },
  {
    id: 2,
    title: '[LG슈퍼럭키세일] 세탁기건조기 세트, 제습기 특가!',
    shop: 'LG전자인증점 삼정',
    date: '7월 11일 14:00',
    img: '',
  },
  {
    id: 3,
    title: '[강세일라이브] 에블린 시즌오프 진행중',
    shop: 'EBLIN 공식몰',
    date: '7월 11일 18:00',
    img: '',
  },
];
export default function SideArea() {
  const { selected } = useShopStore();
  return (
    <div className="w-72 pl-6 flex flex-col gap-3">
      {selected === 3 ? (
        <>
          <div className="bg-hotDeal flex justify-between px-4 py-2 rounded">
            <span className="font-bold">몰 추천 핫딜</span>
            <span
              className="px-2 text-commerceCurrent self-center
       border border-adColor rounded"
            >
              AD
            </span>
          </div>
          {moleHotDealData.map((item) => {
            return (
              <div key={item.id} className="relative flex gap-4">
                <div
                  className="absolute px-1.5 py-0.5 text-xs text-white bg-plusDeal
                rounded-ss rounded-ee z-10"
                >
                  {item.label}
                </div>
                <div
                  className="absolute py-0.5 px-2.5 text-xs text-white
              rounded-ee translate-x-7 bg-discountLabel w-10 text-center"
                >
                  {item.discount}
                </div>
                <div className="border rounded w-36 h-24">
                  <img src={item.img} alt="" />
                </div>
                <div className="self-center	">
                  <p>{item.hotTitle}</p>
                  <p className="text-liveNews font-bold">{item.price}원</p>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {nextLiveData.map((item) => {
            return (
              <div className="flex border rounded">
                <div className="basis-1/3">
                  <img src={item.img} alt="" />
                </div>
                <div className="flex flex-col basis-2/3 p-3 gap-1 text-sm">
                  <p className="line-clamp-2">{item.title}</p>
                  <p className="text-liveShopText">{item.shop}</p>
                  <div className="flex justify-between">
                    <span>{item.date}</span>
                    <div className="border rounded-full w-6 h-6 border-liveButton"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
