export interface Book {
  title: string;
  author: string;
  cover: string;
  rating?: number;
  status: "reading" | "read";
  dateRead?: string;
}

export function loadBooks(bookFiles: Record<string, any>): Book[] {
  return Object.entries(bookFiles)
    .filter(([path]) => !path.includes("/_"))
    .filter(([, file]: [string, any]) => file.frontmatter.title)
    .map(([, file]: [string, any]) => ({
      title: file.frontmatter.title,
      author: file.frontmatter.author,
      cover: file.frontmatter.cover,
      rating: file.frontmatter.rating,
      status: file.frontmatter.status,
      dateRead: file.frontmatter.dateRead,
    }));
}

export function getCurrentlyReading(books: Book[]): Book[] {
  return books.filter((b) => b.status === "reading");
}

export function getReadBooks(books: Book[]): Book[] {
  return books
    .filter((b) => b.status === "read")
    .sort((a, b) => {
      const dateA = a.dateRead ? new Date(a.dateRead).getTime() : 0;
      const dateB = b.dateRead ? new Date(b.dateRead).getTime() : 0;
      return dateB - dateA;
    });
}

export function getRecentlyRead(books: Book[]): Book[] {
  return getReadBooks(books).slice(0, 2);
}
