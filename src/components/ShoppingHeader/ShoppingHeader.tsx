import { useShopStore } from '../../store/shoppingStore';

export default function ShoppingHeader() {
  const { headerMenu, selected, changeSelected } = useShopStore();

  const handleSelected = (id: number) => {
    changeSelected(id);
  };

  return (
    <ul className="flex flex-row gap-3">
      {headerMenu.map((content, index) => {
        return (
          <li
            key={content.id}
            className="text-2xl flex flex-row gap-2 font-bold"
            onClick={() => handleSelected(content.id)}
          >
            <span
              className={`cursor-pointer hover:underline ${
                selected === content.id ? 'text-titleSelected' : 'text-title'
              }`}
            >
              {content.title}
            </span>
            {index !== headerMenu.length - 1 && (
              <span className="text-bar">/</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
