export const Loader = ({
  message = "로딩 중...",
  size = "h-10 w-10",
  color = "border-primary",
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-full">
      {/* 스피너 본체 */}
      <div
        className={`${size} animate-spin rounded-full border-4 border-t-transparent ${color} border-solid`}
      ></div>

      {/* 로딩 메시지 */}
      {message && (
        <p className="mt-4 text-sm font-medium text-gray-600 animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};
