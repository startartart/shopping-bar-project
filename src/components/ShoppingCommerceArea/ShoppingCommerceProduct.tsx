const hotItemProductList = [
  {
    id: 1,
    items: [
      {
        id: 1,
        img: '',
        url: '',
        title: '요즘 너무 핫해',
        subTitle: '만든 사람 천재다',
      },
      {
        id: 2,
        img: '',
        url: '',
        title: '시원하고 가벼워',
        subTitle: '편하게 매일입어',
      },
      {
        id: 3,
        img: '',
        url: '',
        title: '편안함의 차이~',
        subTitle: '입자마자 놀라요',
      },
      {
        id: 4,
        img: '',
        url: '',
        title: '요즘 너무 핫해',
        subTitle: '만든 사람 천재다',
      },
      {
        id: 5,
        img: '',
        url: '',
        title: '요즘 너무 핫해',
        subTitle: '만든 사람 천재다',
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        id: 6,
        img: '',
        url: '',
        title: '요즘 너무 핫해',
        subTitle: '만든 사람 천재다',
      },
      {
        id: 7,
        img: '',
        url: '',
        title: '시원하고 가벼워',
        subTitle: '편하게 매일입어',
      },
      {
        id: 8,
        img: '',
        url: '',
        title: '편안함의 차이~',
        subTitle: '입자마자 놀라요',
      },
      {
        id: 9,
        img: '',
        url: '',
        title: '요즘 너무 핫해',
        subTitle: '만든 사람 천재다',
      },
      {
        id: 10,
        img: '',
        url: '',
        title: '요즘 너무 핫해',
        subTitle: '만든 사람 천재다',
      },
    ],
  },
];

export default function ShoppingCommerceProduct() {
  return (
    <div className="px-5 flex flex-col gap-2">
      {hotItemProductList.map((row) => {
        return (
          <div key={row.id} className="flex gap-1 flex-1">
            {row.items.map((product) => {
              return (
                <div key={product.id} className="flex flex-col">
                  <div>
                    <img src={product.img} className="w-full h-36"></img>
                  </div>
                  <span>{product.title}</span>
                  <span>{product.subTitle}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
