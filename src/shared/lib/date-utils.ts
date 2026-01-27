/**
 * 날짜를 "Posted on April 17, 2021" 형식으로 포맷팅
 * @param dateString YYYY-MM-DD 형식의 날짜 문자열
 * @returns "Posted on Month Day, Year" 형식의 문자열
 */
export function formatPostDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    
    // 유효한 날짜인지 확인
    if (isNaN(date.getTime())) {
      return dateString; // 유효하지 않으면 원본 반환
    }

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `Posted on ${month} ${day}, ${year}`;
  } catch (error) {
    console.error("Date formatting error:", error);
    return dateString;
  }
}
