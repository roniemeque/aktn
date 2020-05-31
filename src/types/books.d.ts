interface Rating {
  name: string;
  text: string;
}

interface Book {
  id: string;
  title: string;
  category: string;
  thumb?: string;
  shortDesc?: string;
  ratings?: Rating[];
}

interface CategoryWithBooks {
  title: string;
  books: Book[];
}
