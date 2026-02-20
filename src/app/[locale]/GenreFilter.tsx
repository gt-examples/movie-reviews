"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface GenreFilterProps {
  genres: { key: string; label: string }[];
  activeGenre: string | null;
  allLabel: string;
}

export default function GenreFilter({
  genres,
  activeGenre,
  allLabel,
}: GenreFilterProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(genreKey: string | null) {
    if (genreKey) {
      router.push(`${pathname}?genre=${encodeURIComponent(genreKey)}`);
    } else {
      router.push(pathname);
    }
  }

  return (
    <div className="flex items-center gap-2 flex-wrap mb-6">
      <button
        onClick={() => handleClick(null)}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
          !activeGenre
            ? "bg-neutral-100 text-neutral-900"
            : "bg-neutral-800 text-neutral-400 hover:text-neutral-200"
        }`}
      >
        {allLabel}
      </button>
      {genres.map((g) => (
        <button
          key={g.key}
          onClick={() => handleClick(g.key)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            activeGenre === g.key
              ? "bg-neutral-100 text-neutral-900"
              : "bg-neutral-800 text-neutral-400 hover:text-neutral-200"
          }`}
        >
          {g.label}
        </button>
      ))}
    </div>
  );
}
