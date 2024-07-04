import ShoppingCommerceDescription from './ShoppingCommerceDescription';
import ShoppingCommerceProduct from './ShoppingCommerceProduct';
import TodayPickArea from './TodayPickArea';
import PlusDealArea from './PlusDealArea';
import SideArea from './SideArea';
import ShoppingLiveArea from './ShoppingLiveArea';

export default function ShoppingCommerceArea() {
  return (
    <div className="flex flex-col">
      {/* 쇼핑, 맨즈 */}
      <div className="flex gap-5">
        <ShoppingCommerceDescription />
        <ShoppingCommerceProduct />
      </div>
      <TodayPickArea />
    </div>
  );
}

// {/* 원쁠딜, 쇼핑라이브 */}
// <TodayPickArea />

// {/* 원쁠딜 */}
// <PlusDealArea />

// {/* 쇼핑라이브 */}
// <ShoppingLiveArea />

// {/* 원쁠딜, 쇼핑라이브 */}
// <SideArea />
