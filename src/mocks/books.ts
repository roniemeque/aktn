export const books = [
  {
    id: "267070159984787987",
    title: "A Game of Thrones",
    shortDesc: "fun book",
    thumb: "image",
    category: "Fantasy",
  },
  {
    id: "267070167642538515",
    title: "A Clash of Kings",
    shortDesc: "cool book",
    thumb: "image",
    category: "Fantasy",
  },
  {
    id: "267070188131713554",
    title: "You Don't Know JS",
    shortDesc: "really nice",
    thumb: "image",
    category: "Technical",
  },
  {
    id: "267070199641932307",
    title: "JS The Good Parts",
    shortDesc: "great",
    thumb: "image",
    category: "Technical",
  },
  {
    id: "267070222351991315",
    title: "Dracula",
    shortDesc: "this one is kinda scary",
    thumb: "image",
    category: "Horror",
  },
];

export const book = books[0];

export const bookWithRatings = {
  ...book[0],
  ratings: [
    {
      name: "Ronie",
      text: "Very cool book",
    },
    {
      name: "Eduardo",
      text: "Wow nice cool",
    },
  ],
};
