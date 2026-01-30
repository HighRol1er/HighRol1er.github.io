export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const MONTHS = [
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

  const year = date.getFullYear();
  const month = MONTHS[date.getMonth()];
  const day = date.getDate();

  return `Posted on ${month} ${day}, ${year}`;
}
