export default function TodayPickArea() {
  return (
    <div
      className="mx-5 my-3 px-5 py-3 bg-todayPick
    flex flex-row items-center gap-2"
    >
      {/* 
      오늘의 혜택
      dot
      logo
      (date)
      description <hotKeyword>
       */}
      <span className="font-bold">오늘의 혜택</span>
      <span className="inline-block w-1 h-1 rounded-full bg-dot"></span>
      <span>Logo</span>
      <span>7/4~7/10</span>
      <span>7월 혜택이 무려 50% 세일 이랍니다.</span>
    </div>
  );
}
