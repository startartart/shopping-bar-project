const examData = [
  {
    id: 1,
    label: '1+1',
    discount: '38%',
    price: 24800,
    title: '[캔마트] (시원해요) 헤링본 링클 반팔티 1개 + 1개',
    img: '',
  },
  {
    id: 2,
    label: '적립',
    discount: '22%',
    price: 1660000,
    title: '삼성 갤럭시북4 프로 NT960XGQ-A51A + SSD 더블업 사무용 휴대용',
    img: '',
  },
  {
    id: 3,
    label: '1+@',
    discount: '10%',
    price: 141200,
    title: '2024 하기스 네이처메이드 밤부 팬티형 3단계 3팩+3팩 외',
    img: '',
  },
  {
    id: 4,
    label: '1+1',
    discount: '38%',
    price: 24800,
    title: '[캔마트] (시원해요) 헤링본 링클 반팔티 1개 + 1개',
    img: '',
  },
  {
    id: 5,
    label: '적립',
    discount: '22%',
    price: 1660000,
    title: '삼성 갤럭시북4 프로 NT960XGQ-A51A + SSD 더블업 사무용 휴대용',
    img: '',
  },
  {
    id: 6,
    label: '1+@',
    discount: '10%',
    price: 141200,
    title: '2024 하기스 네이처메이드 밤부 팬티형 3단계 3팩+3팩 외',
    img: '',
  },
];

export default function PlusDealArea() {
  return (
    <div className="flex basis-2/3 flex-wrap gap-x-5 gap-y-6">
      {examData.map((data) => {
        return (
          <div className="relative w-44" key={data.id}>
            <div
              className="absolute px-1.5 py-0.5 text-xs text-white bg-plusDeal
              rounded-ss rounded-ee z-10"
            >
              {data.label}
            </div>
            <div
              className="absolute py-0.5 px-2.5 text-xs text-white
            rounded-ee translate-x-7 bg-discountLabel w-10 text-center"
            >
              {data.discount}
            </div>
            <div className="border rounded w-44 h-32">
              <img src={data.img} alt="" />
            </div>
            <div className="line-clamp-2 text-sm mt-2.5">
              <span className="text-liveNews font-bold">{data.price}원</span>
              <span> {data.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
