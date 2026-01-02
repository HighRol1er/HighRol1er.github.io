export function ScrollHint() {
  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-80 transition-opacity z-50"
      onClick={handleClick}
    >
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}
