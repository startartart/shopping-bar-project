export default function TodayPickArea() {
  return (
    <div
      className="mx-5 my-3 px-5 py-3 bg-todayPick
    flex flex-row items-center gap-2 text-lg font-medium"
    >
      {/* 
      <쇼핑, 맨즈>
      오늘의 혜택
      dot
      logo
      (date) description <hotKeyword>

      <원쁠딜, 쇼핑라이브>
       */}
      <span className="font-bold">오늘의 혜택</span>
      <span className="inline-block w-1 h-1 rounded-full bg-dot"></span>
      <span>Logo</span>
      <span className="hover:underline">
        7/4~7/10 7월 혜택이 무려 <span className="text-unique">50% 세일</span>{' '}
        이랍니다.
      </span>
    </div>
  );
}
