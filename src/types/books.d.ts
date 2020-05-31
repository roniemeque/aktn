interface Book {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  thumb: string;
}

interface CategoryWithBooks {
  title: string;
  books: Book[];
}
