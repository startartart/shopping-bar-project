import ShoppingContainer from './components/ShoppingHeader/ShoppingContainer';
import ShoppingCommerceArea from './components/ShoppingCommerceArea/ShoppingCommerceArea';
import PaginationFooter from './components/PaginationFooter/PaginationFooter';
export default function App() {
  return (
    <div
      className="w-custom absolute inset-y-1/4 right-1/2 translate-x-1/2
    shadow-custom rounded-lg h-max"
    >
      <ShoppingContainer />
      <ShoppingCommerceArea />
      <PaginationFooter />
    </div>
  );
}
