import { Fragment } from 'react/jsx-runtime';

const mailNameLink = [
  {
    id: 1,
    items: [
      {
        id: 1,
        name: '쿠팡',
      },
      {
        id: 2,
        name: 'G마켓',
      },
      {
        id: 3,
        name: '옥션',
      },
      {
        id: 4,
        name: 'SSG닷컴',
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        id: 5,
        name: '11번가',
      },
      {
        id: 6,
        name: '올리브영',
      },
      {
        id: 7,
        name: '위메프',
      },
      {
        id: 8,
        name: '하프클럽',
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        id: 9,
        name: 'GS SHOP',
      },
      {
        id: 10,
        name: 'CJ온스타일',
      },
      {
        id: 11,
        name: '패션플러스',
      },
    ],
  },
];

const quickLinkList = [
  {
    id: 1,
    name: '쇼핑홈',
  },

  {
    id: 2,
    name: '리뷰적립',
  },
  {
    id: 3,
    name: '주문',
  },
  {
    id: 4,
    name: '장바구니',
  },
];
export default function ShoppingCommerceDescription() {
  return (
    <div className="px-5 w-80 flex flex-col gap-3">
      <div className="flex flex-col border rounded-lg bg-bar p-2.5 gap-1">
        {mailNameLink.map((row) => {
          return (
            <div
              key={row.id}
              className="flex flex-row justify-between items-center"
            >
              {row.items.map((link, index) => {
                return (
                  <Fragment key={link.id}>
                    <span className="hover:underline cursor-pointer">
                      {link.name}
                    </span>
                    {index !== row.items.length - 1 && (
                      <span className="inline-block w-1 h-1 rounded-full bg-dot"></span>
                    )}
                  </Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between border rounded-lg bg-bar p-2.5">
        {quickLinkList.map((link) => {
          return (
            <div
              key={link.id}
              className="flex flex-col justify-center items-center
              gap-0.5 hover:underline cursor-pointer"
            >
              <div className="w-12 h-12 border rounded-full bg-white"></div>
              <div>{link.name}</div>
            </div>
          );
        })}
      </div>
      <div
        className="flex flex-col gap-2 justify-center items-center
      hover:underline cursor-pointer"
      >
        <div className="border rounded-lg h-40 w-full">
          <img src="" alt="" />
        </div>
        <p className="text-center">신동엽 특별가, 반바지도 자신감있게</p>
      </div>
    </div>
  );
}
