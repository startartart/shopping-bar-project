import ShoppingHeader from './ShoppingHeader';
import ShoppingPaginationBar from './ShoppingPaginationBar';

export default function ShoppingContainer() {
  return (
    <div className="flex flex-row p-5 justify-between items-center">
      <ShoppingHeader />
      <ShoppingPaginationBar />
    </div>
  );
}
