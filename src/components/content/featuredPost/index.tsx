import Image from "next/image";
import Link from "next/link";

export function FeaturedPost() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-red-500">
      <div>
        <Link
          href={"#"}
          className="w-full h-full flex overflow-hidden rounded-xl"
        >
          <Image
            src={"/images/bryen_0.png"}
            alt="Titulo do Post"
            className="hover:scale-105 transition"
            width={1200}
            height={720}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <time dateTime="2025-10-06">06-10-2025</time>
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          repudiandae culpa corrupti necessitatibus perferendis. Reprehenderit,
          labore non nisi hic est facere illo ut odio ullam saepe vel nulla
          cumque? Officiis.
        </p>
      </div>
    </section>
  );
}
