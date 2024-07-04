export default function PaginationFooter() {
  return (
    <div className="px-5 py-3 border-t relative">
      <div className="flex flex-row justify-center items-center gap-8">
        <div className="border rounded-full w-12 h-12 flex justify-center">
          <p className="self-center">왼</p>
        </div>
        <div className="">
          <span className="text-unique">쇼핑아이템</span>
          <span> 더보기</span>
          <span className="text-commerceCurrent">2</span>
          <span>/13</span>
        </div>
        <div className="border rounded-full w-12 h-12 flex justify-center">
          <p className="self-center">오른</p>
        </div>
      </div>
      <div className="absolute right-5 top-0 h-full flex">
        <p
          className="px-2 text-commerceCurrent self-center
         border border-adColor rounded"
        >
          AD
        </p>
      </div>
    </div>
  );
}
