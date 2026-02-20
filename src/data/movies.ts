export interface Review {
  author: string;
  rating: number;
  text: string;
}

export interface Movie {
  slug: string;
  title: string;
  genre: string;
  releaseDate: string;
  rating: number;
  reviewCount: number;
  synopsis: string;
  fullSynopsis: string;
  director: string;
  runtime: string;
  cast: { name: string; role: string }[];
  reviews: Review[];
  ratingsBreakdown: { stars: number; percentage: number }[];
}

// All text fields here are English keys — they get translated via gt() at render time
export const movieData: Omit<Movie, "title" | "genre" | "synopsis" | "fullSynopsis" | "director" | "runtime" | "cast" | "reviews">[] = [
  {
    slug: "the-last-horizon",
    releaseDate: "2025-11-15",
    rating: 8.4,
    reviewCount: 12847,
    ratingsBreakdown: [
      { stars: 5, percentage: 52 },
      { stars: 4, percentage: 28 },
      { stars: 3, percentage: 12 },
      { stars: 2, percentage: 5 },
      { stars: 1, percentage: 3 },
    ],
  },
  {
    slug: "midnight-in-montmartre",
    releaseDate: "2025-08-22",
    rating: 7.2,
    reviewCount: 8321,
    ratingsBreakdown: [
      { stars: 5, percentage: 30 },
      { stars: 4, percentage: 32 },
      { stars: 3, percentage: 22 },
      { stars: 2, percentage: 10 },
      { stars: 1, percentage: 6 },
    ],
  },
  {
    slug: "iron-verdict",
    releaseDate: "2026-01-10",
    rating: 8.9,
    reviewCount: 21503,
    ratingsBreakdown: [
      { stars: 5, percentage: 61 },
      { stars: 4, percentage: 24 },
      { stars: 3, percentage: 9 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 2 },
    ],
  },
  {
    slug: "the-cartographers-daughter",
    releaseDate: "2025-05-03",
    rating: 7.8,
    reviewCount: 6214,
    ratingsBreakdown: [
      { stars: 5, percentage: 38 },
      { stars: 4, percentage: 30 },
      { stars: 3, percentage: 18 },
      { stars: 2, percentage: 9 },
      { stars: 1, percentage: 5 },
    ],
  },
  {
    slug: "echoes-of-the-deep",
    releaseDate: "2025-10-31",
    rating: 7.5,
    reviewCount: 9876,
    ratingsBreakdown: [
      { stars: 5, percentage: 34 },
      { stars: 4, percentage: 29 },
      { stars: 3, percentage: 20 },
      { stars: 2, percentage: 11 },
      { stars: 1, percentage: 6 },
    ],
  },
  {
    slug: "boundless",
    releaseDate: "2025-12-20",
    rating: 8.7,
    reviewCount: 15432,
    ratingsBreakdown: [
      { stars: 5, percentage: 58 },
      { stars: 4, percentage: 26 },
      { stars: 3, percentage: 10 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 2 },
    ],
  },
];

export const genres = [
  "Science Fiction",
  "Romance",
  "Thriller",
  "Drama",
  "Horror",
  "Animation",
] as const;
