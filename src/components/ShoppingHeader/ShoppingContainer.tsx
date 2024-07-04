import ShoppingHeader from './ShoppingHeader';
import ShoppingPaginationBar from './ShoppingPaginationBar';
import { headerMenu } from '../../store/shoppingStore';
import { useState } from 'react';

export default function ShoppingContainer() {
  const [selected, setSelected] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelected = (id: number) => {
    setSelected(id);
    setCurrentPage(1);
  };

  const handlePagination = (direction: string) => {
    if (direction === 'next') {
      setCurrentPage(currentPage + 1);
    }
    if (direction === 'prev') {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-row p-5 justify-between items-center">
      <ShoppingHeader
        headerMenu={headerMenu}
        handleSelected={handleSelected}
        selected={selected}
      />
      <ShoppingPaginationBar
        headerMenu={headerMenu}
        handlePagination={handlePagination}
        selected={selected}
        currentPage={currentPage}
      />
    </div>
  );
}
