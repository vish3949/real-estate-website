export function formatDate(date: Date): string {
  // Use a consistent date format that won't change between server and client
  return date.toLocaleDateString("en", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}
