import { MenuTypes } from '../../types/shopping.types';

type ShoppingHeaderProps = {
  headerMenu: MenuTypes[];
  handleSelected: (id: number) => void;
  selected: number;
};

export default function ShoppingHeader({
  headerMenu,
  handleSelected,
  selected,
}: ShoppingHeaderProps) {
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
