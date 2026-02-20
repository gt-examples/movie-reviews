import { T, Var } from "gt-next";
import { getGT } from "gt-next/server";
import { Num, DateTime } from "gt-next";
import { LocaleSelector } from "gt-next";
import Link from "next/link";
import { movieData } from "@/data/movies";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function StarIcon({ className = "text-amber-400" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StarIconEmpty() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-neutral-600"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function BackArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

// Translatable content per movie, keyed by slug
function getMovieContent(gt: Awaited<ReturnType<typeof getGT>>) {
  return {
    "the-last-horizon": {
      title: gt("The Last Horizon"),
      genre: gt("Science Fiction"),
      synopsis: gt(
        "A lone astronaut discovers an ancient signal at the edge of the solar system, leading humanity to question everything it knows about its origins."
      ),
      fullSynopsis: gt(
        "Commander Elena Vasquez is on a routine deep-space survey mission when her instruments pick up a repeating signal from beyond the Kuiper Belt. Against mission protocol, she follows the signal to its source: a massive, impossibly old structure orbiting a rogue planet. As she investigates, she discovers that the structure contains a message — not for humanity as it is, but for what it might become. Back on Earth, her transmissions spark a global crisis. Governments, corporations, and religious institutions all lay claim to the discovery. Elena must navigate political intrigue, her own deteriorating life-support systems, and the terrifying implications of a message that suggests humanity was never alone, and was never meant to stay on Earth."
      ),
      director: gt("Sofia Alvarez"),
      runtime: gt("2h 22min"),
      cast: [
        { name: "Maria Chen", role: gt("Commander Elena Vasquez") },
        { name: "James Okafor", role: gt("Mission Control Director Webb") },
        { name: "Lena Hoffmann", role: gt("Dr. Yuki Tanaka") },
        { name: "Robert Nash", role: gt("Senator Morrison") },
      ],
      reviews: [
        {
          author: "CinemaScope",
          rating: 9,
          text: gt(
            "A stunning meditation on humanity's place in the cosmos. Alvarez crafts a slow-burn thriller that rewards patience with one of the most breathtaking final acts in recent science fiction."
          ),
        },
        {
          author: "FilmDaily",
          rating: 8,
          text: gt(
            "Chen's performance carries the film through its quieter moments. The visual effects are restrained but effective — this is hard sci-fi that respects its audience's intelligence."
          ),
        },
        {
          author: "ReelTalk",
          rating: 8,
          text: gt(
            "While the political subplot occasionally drags, the core mystery is utterly compelling. The sound design alone is worth the price of admission."
          ),
        },
      ],
    },
    "midnight-in-montmartre": {
      title: gt("Midnight in Montmartre"),
      genre: gt("Romance"),
      synopsis: gt(
        "Two strangers meet at a Parisian cafe and spend one transformative night wandering the city, sharing secrets they have never told anyone."
      ),
      fullSynopsis: gt(
        "Adele, a French cellist on the verge of abandoning her career, and Marco, an Italian architect visiting Paris to finalize his divorce papers, meet by chance when they reach for the same book at a cafe in Montmartre. What begins as polite conversation becomes an all-night walk through the streets of Paris — from the quiet gardens of Sacre-Coeur to the banks of the Seine at dawn. As the hours pass, they reveal their fears, regrets, and secret ambitions. Neither asks for the other's phone number. The film is a meditation on the connections that shape us most: the ones that are brief, honest, and impossible to repeat."
      ),
      director: gt("Claire Fontaine"),
      runtime: gt("1h 48min"),
      cast: [
        { name: "Isabelle Moreau", role: gt("Adele Beaumont") },
        { name: "Luca Bianchi", role: gt("Marco Ferretti") },
        { name: "Philippe Dubois", role: gt("The Bartender") },
        { name: "Nadia Kowalski", role: gt("Street Musician") },
      ],
      reviews: [
        {
          author: "RomanceReel",
          rating: 8,
          text: gt(
            "Fontaine captures the magic of fleeting connection with warmth and restraint. Moreau and Bianchi have effortless chemistry that makes every scene feel genuine."
          ),
        },
        {
          author: "CinemaScope",
          rating: 7,
          text: gt(
            "Beautifully photographed but occasionally indulgent. The dialogue shines when it is specific and stumbles when it reaches for profundity."
          ),
        },
        {
          author: "DailyScreen",
          rating: 7,
          text: gt(
            "A gentle, bittersweet film that lingers in the mind long after the credits roll. Not every romance needs a grand gesture."
          ),
        },
      ],
    },
    "iron-verdict": {
      title: gt("Iron Verdict"),
      genre: gt("Thriller"),
      synopsis: gt(
        "A defense attorney uncovers a vast conspiracy when her seemingly routine case reveals connections to the highest levels of government."
      ),
      fullSynopsis: gt(
        "Attorney Sarah Chen takes on what appears to be a straightforward assault case: a factory worker accused of attacking his supervisor. But when key evidence goes missing and a witness is found dead, Sarah realizes her client stumbled onto something far larger — a network of illegal arms deals funneled through a defense contractor with ties to sitting members of Congress. As she digs deeper, she faces threats from every direction: the firm pressures her to drop the case, anonymous warnings arrive at her home, and even her client begins to doubt whether the truth is worth the danger. The film builds to a courtroom sequence that is as tense as any action set piece, with Sarah forced to make an impossible choice between her safety and her principles."
      ),
      director: gt("David Park"),
      runtime: gt("2h 11min"),
      cast: [
        { name: "Angela Torres", role: gt("Sarah Chen") },
        { name: "Michael Reeves", role: gt("Daniel Kowalski") },
        { name: "Catherine Zhong", role: gt("Judge Patricia Holloway") },
        { name: "Omar Hassan", role: gt("FBI Agent Marcus Cole") },
      ],
      reviews: [
        {
          author: "ThrillSeeker",
          rating: 9,
          text: gt(
            "Relentlessly gripping from start to finish. Torres delivers a career-defining performance as a woman who refuses to look away. Park directs with surgical precision."
          ),
        },
        {
          author: "FilmDaily",
          rating: 9,
          text: gt(
            "The courtroom scenes are electrifying, but it is the quieter moments — Sarah alone in her apartment, questioning her choices — that give the film its soul."
          ),
        },
        {
          author: "ReelTalk",
          rating: 9,
          text: gt(
            "A legal thriller that actually thrills. The screenplay is razor-sharp, and the supporting cast elevates every scene they are in."
          ),
        },
      ],
    },
    "the-cartographers-daughter": {
      title: gt("The Cartographer's Daughter"),
      genre: gt("Drama"),
      synopsis: gt(
        "Set in 1920s Istanbul, a young woman inherits her father's map shop and discovers hidden messages that reveal a forgotten chapter of her family's history."
      ),
      fullSynopsis: gt(
        "When master cartographer Idris Aydin dies unexpectedly, his daughter Leyla inherits his cluttered shop in Istanbul's Grand Bazaar. As she catalogs his collection for sale, she discovers annotations hidden in the margins of his maps — coded messages that trace a secret journey her father made decades earlier. Following his trail through the shop's archives, Leyla uncovers a story of forbidden love, political exile, and a family she never knew existed. The maps lead her across Istanbul, from the underground cisterns to crumbling Ottoman estates, each location revealing another layer of a man she thought she knew. The film is a richly textured portrait of memory, identity, and the stories we inherit whether we want them or not."
      ),
      director: gt("Elif Yilmaz"),
      runtime: gt("2h 5min"),
      cast: [
        { name: "Deniz Aydin", role: gt("Leyla Aydin") },
        { name: "Serhan Kaya", role: gt("Young Idris") },
        { name: "Ayse Demir", role: gt("Grandmother Safiye") },
        { name: "Kerem Tas", role: gt("Antiques Dealer Faruk") },
      ],
      reviews: [
        {
          author: "CinemaScope",
          rating: 8,
          text: gt(
            "Yilmaz paints Istanbul as a character in its own right. The film moves at a deliberate pace that mirrors the careful unfolding of its central mystery."
          ),
        },
        {
          author: "DailyScreen",
          rating: 8,
          text: gt(
            "Deniz Aydin is a revelation. She carries the emotional weight of the film with quiet intensity, and the period production design is impeccable."
          ),
        },
        {
          author: "FilmDaily",
          rating: 7,
          text: gt(
            "A beautifully crafted drama that occasionally loses momentum in its middle act. But the final revelation makes the journey worthwhile."
          ),
        },
      ],
    },
    "echoes-of-the-deep": {
      title: gt("Echoes of the Deep"),
      genre: gt("Horror"),
      synopsis: gt(
        "A marine research team encounters something ancient and malevolent in an unexplored trench, where the pressure is not the only thing trying to crush them."
      ),
      fullSynopsis: gt(
        "Dr. Mara Singh leads a six-person team aboard the research submersible Nereid to explore the Aldrich Trench, the deepest unexplored point in the Pacific. Initial readings suggest unusual geological formations, but as they descend past 8,000 meters, their instruments begin recording sounds that cannot be explained by known marine life. Communication with the surface becomes intermittent. Equipment malfunctions in patterns that seem almost deliberate. When they finally reach the trench floor, they discover structures that predate any known civilization — and something within those structures is aware of their presence. The crew must fight claustrophobia, paranoia, and an entity that uses the crushing pressure and absolute darkness as its weapons."
      ),
      director: gt("Henrik Strand"),
      runtime: gt("1h 54min"),
      cast: [
        { name: "Priya Kapoor", role: gt("Dr. Mara Singh") },
        { name: "Thomas Gray", role: gt("Engineer Jack Dalton") },
        { name: "Yuna Park", role: gt("Sonar Specialist Hana Kim") },
        { name: "Erik Lindgren", role: gt("Captain Nils Bergman") },
      ],
      reviews: [
        {
          author: "HorrorPulse",
          rating: 8,
          text: gt(
            "Strand proves that the scariest monsters are the ones you never fully see. The sound design is extraordinary — this film demands to be experienced in a theater."
          ),
        },
        {
          author: "FilmDaily",
          rating: 7,
          text: gt(
            "Tense and atmospheric, with strong performances across the board. It loses some tension in the third act when it shows too much, but the first hour is masterful horror filmmaking."
          ),
        },
        {
          author: "ReelTalk",
          rating: 8,
          text: gt(
            "A claustrophobic nightmare that gets under your skin. Kapoor anchors the film with a performance that balances scientific curiosity with primal fear."
          ),
        },
      ],
    },
    boundless: {
      title: gt("Boundless"),
      genre: gt("Animation"),
      synopsis: gt(
        "A child with the ability to bring drawings to life must navigate a world where imagination is both a gift and a dangerous power."
      ),
      fullSynopsis: gt(
        "Ten-year-old Sora has always drawn compulsively — filling sketchbooks with fantastical creatures, impossible landscapes, and friends she wishes she had. When a mysterious new crayon set arrives on her doorstep, her drawings begin stepping off the page. At first it is magical: a drawn bird becomes her companion, a sketched bridge helps her cross a real river. But Sora soon discovers that her creations have wills of their own, and not all of them are friendly. When her darkest drawing — born from a moment of anger and loneliness — escapes into the real world, Sora must journey into the world she created to confront the parts of herself she tried to hide. The film is a visually inventive exploration of creativity, emotional honesty, and the courage it takes to face your own imagination."
      ),
      director: gt("Mei Tanaka"),
      runtime: gt("1h 42min"),
      cast: [
        { name: "Aoi Suzuki", role: gt("Sora (voice)") },
        { name: "Ken Watanabe", role: gt("Grandfather Hideo (voice)") },
        { name: "Hana Kimura", role: gt("Teacher Miss Ota (voice)") },
        { name: "Riku Yamamoto", role: gt("The Shadow (voice)") },
      ],
      reviews: [
        {
          author: "AnimationWorld",
          rating: 9,
          text: gt(
            "A masterpiece of animated storytelling. Tanaka blends hand-drawn and digital techniques to create a visual language that perfectly mirrors its themes of creation and destruction."
          ),
        },
        {
          author: "CinemaScope",
          rating: 9,
          text: gt(
            "Boundless works on every level — as a children's adventure, as a meditation on art, and as an emotional journey that will leave adults reaching for tissues."
          ),
        },
        {
          author: "FilmDaily",
          rating: 8,
          text: gt(
            "The voice cast is superb, and the score is one of the year's best. A rare animated film that trusts its audience enough to sit with difficult emotions."
          ),
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return movieData.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const gt = await getGT();
  const content = getMovieContent(gt);
  const movie = content[slug as keyof typeof content];
  if (!movie) return {};
  return {
    title: `${movie.title} | ${gt("Movie Reviews")}`,
    description: movie.synopsis,
    openGraph: {
      title: movie.title,
      description: movie.synopsis,
      locale,
      type: "website",
      siteName: "General Translation",
    },
  };
}

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const gt = await getGT();
  const allContent = getMovieContent(gt);
  const movie = allContent[slug as keyof typeof allContent];
  const data = movieData.find((m) => m.slug === slug);

  if (!movie || !data) notFound();

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
            <Link
              href="/"
              className="text-sm font-semibold text-neutral-100 hover:text-neutral-300 transition-colors"
            >
              {gt("Movie Reviews")}
            </Link>
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
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
        >
          <BackArrow />
          {gt("Back to all films")}
        </Link>

        {/* Title and meta */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-100 mb-3">
            {movie.title}
          </h1>
          <div className="flex items-center gap-3 flex-wrap mb-4">
            <span className="inline-block rounded-full bg-neutral-800 px-3 py-0.5 text-xs font-medium text-neutral-300">
              {movie.genre}
            </span>
            <T>
              <span className="text-sm text-neutral-500">
                Released <DateTime>{new Date(data.releaseDate)}</DateTime>
              </span>
            </T>
            <span className="text-sm text-neutral-500">{movie.director}</span>
            <span className="text-sm text-neutral-500">{movie.runtime}</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <StarIcon />
            <span className="text-2xl font-bold text-neutral-100">
              <Num>{data.rating}</Num>
            </span>
            <span className="text-sm text-neutral-500">/10</span>
            <T>
              <span className="text-sm text-neutral-500 ml-2">
                <Num>{data.reviewCount}</Num> reviews
              </span>
            </T>
          </div>
        </div>

        {/* Synopsis */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">
            {gt("Synopsis")}
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {movie.fullSynopsis}
          </p>
        </section>

        {/* Cast */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">
            {gt("Cast")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {movie.cast.map((member, i) => (
              <div
                key={i}
                className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
              >
                <p className="text-sm font-medium text-neutral-200">
                  {member.name}
                </p>
                <T>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    as <Var>{member.role}</Var>
                  </p>
                </T>
              </div>
            ))}
          </div>
        </section>

        {/* Ratings Breakdown */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">
            {gt("Ratings Breakdown")}
          </h2>
          <div className="space-y-2">
            {data.ratingsBreakdown.map((tier) => (
              <div key={tier.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-0.5 w-24 shrink-0">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < tier.stars ? (
                      <StarIcon key={i} />
                    ) : (
                      <StarIconEmpty key={i} />
                    )
                  )}
                </div>
                <div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-400/80"
                    style={{ width: `${tier.percentage}%` }}
                  />
                </div>
                <span className="text-xs text-neutral-500 w-10 text-right">
                  <Num>{tier.percentage}</Num>%
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">
            {gt("Reviews")}
          </h2>
          <div className="space-y-4">
            {movie.reviews.map((review, i) => (
              <div
                key={i}
                className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-neutral-200">
                    {review.author}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <StarIcon />
                    <span className="text-sm font-semibold text-neutral-100">
                      <Num>{review.rating}</Num>
                    </span>
                    <span className="text-xs text-neutral-500">/10</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
