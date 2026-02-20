import { T } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import { Num, DateTime } from "gt-next";

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-amber-400"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default async function Home() {
  const gt = await getGT();

  const movies = [
    {
      title: gt("The Last Horizon"),
      genre: gt("Science Fiction"),
      releaseDate: "2025-11-15",
      rating: 8.4,
      reviewCount: 12847,
      synopsis: gt(
        "A lone astronaut discovers an ancient signal at the edge of the solar system, leading humanity to question everything it knows about its origins."
      ),
    },
    {
      title: gt("Midnight in Montmartre"),
      genre: gt("Romance"),
      releaseDate: "2025-08-22",
      rating: 7.2,
      reviewCount: 8321,
      synopsis: gt(
        "Two strangers meet at a Parisian cafe and spend one transformative night wandering the city, sharing secrets they have never told anyone."
      ),
    },
    {
      title: gt("Iron Verdict"),
      genre: gt("Thriller"),
      releaseDate: "2026-01-10",
      rating: 8.9,
      reviewCount: 21503,
      synopsis: gt(
        "A defense attorney uncovers a vast conspiracy when her seemingly routine case reveals connections to the highest levels of government."
      ),
    },
    {
      title: gt("The Cartographer's Daughter"),
      genre: gt("Drama"),
      releaseDate: "2025-05-03",
      rating: 7.8,
      reviewCount: 6214,
      synopsis: gt(
        "Set in 1920s Istanbul, a young woman inherits her father's map shop and discovers hidden messages that reveal a forgotten chapter of her family's history."
      ),
    },
    {
      title: gt("Echoes of the Deep"),
      genre: gt("Horror"),
      releaseDate: "2025-10-31",
      rating: 7.5,
      reviewCount: 9876,
      synopsis: gt(
        "A marine research team encounters something ancient and malevolent in an unexplored trench, where the pressure is not the only thing trying to crush them."
      ),
    },
    {
      title: gt("Boundless"),
      genre: gt("Animation"),
      releaseDate: "2025-12-20",
      rating: 8.7,
      reviewCount: 15432,
      synopsis: gt(
        "A child with the ability to bring drawings to life must navigate a world where imagination is both a gift and a dangerous power."
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Movie Reviews")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/movie-reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            {gt("Top Rated Films")}
          </h2>
          <T>
            <p className="text-base text-neutral-400 max-w-xl leading-relaxed mb-4">
              Ratings, reviews, and release dates for the latest films. This is
              an example application built with General Translation to
              demonstrate internationalization.
            </p>
          </T>
        </div>

        <div className="space-y-4">
          {movies.map((movie, i) => (
            <article
              key={i}
              className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-neutral-100 mb-1.5">
                    {movie.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-block rounded-full bg-neutral-800 px-3 py-0.5 text-xs font-medium text-neutral-300">
                      {movie.genre}
                    </span>
                    <T>
                      <span className="text-xs text-neutral-500">
                        Released{" "}
                        <DateTime>{new Date(movie.releaseDate)}</DateTime>
                      </span>
                    </T>
                  </div>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <div className="flex items-center gap-1.5">
                    <StarIcon />
                    <span className="text-lg font-semibold text-neutral-100">
                      <Num>{movie.rating}</Num>
                    </span>
                    <span className="text-sm text-neutral-500">/10</span>
                  </div>
                  <T>
                    <span className="text-xs text-neutral-500 mt-0.5">
                      <Num>{movie.reviewCount}</Num> reviews
                    </span>
                  </T>
                </div>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {movie.synopsis}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
