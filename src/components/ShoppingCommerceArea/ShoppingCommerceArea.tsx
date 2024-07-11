import ShoppingCommerceDescription from './ShoppingCommerceDescription';
import ShoppingCommerceProduct from './ShoppingCommerceProduct';
import TodayPickArea from './TodayPickArea/TodayPickArea';
import { useShopStore } from '../../store/shoppingStore';
import PlusDealArea from './PlusDealArea';
import SideArea from './SideArea';
import ShoppingLiveArea from './ShoppingLiveArea';

export default function ShoppingCommerceArea() {
  const { selected } = useShopStore();
  return (
    <div className="flex flex-col">
      <div className="min-h-main">
        {/* 원쁠딜, 쇼핑라이브 */}
        {selected >= 3 && <TodayPickArea />}

        {/* 쇼핑, 맨즈 */}
        {selected <= 2 && (
          <>
            <div className="flex gap-5">
              <ShoppingCommerceDescription />
              <ShoppingCommerceProduct />
            </div>
            <TodayPickArea />
          </>
        )}

        {selected >= 3 && (
          <div className="flex px-5 h-max">
            {/* 원쁠딜 */}
            {selected === 3 && <PlusDealArea />}
            {/* 쇼핑라이브 */}
            {selected === 4 && <ShoppingLiveArea />}
            <div className="border-s"></div>
            {/* 원쁠딜, 쇼핑라이브 */}
            <SideArea />
          </div>
        )}
      </div>
    </div>
  );
}
