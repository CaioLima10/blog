import Image from "next/image";
import Link from "next/link";
import { HeadingPost } from "../headingPost";
import { CoverImagePost } from "../coverImagePost";
import { ContentPosts } from "../contentPosts";

export function FeaturedPost() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 group mb-24">
      <CoverImagePost
        ImageProps={{
          alt: "Titulo do Post",
          src: "/images/bryen_2.png",
          width: 1200,
          height: 720,
          priority: true,
        }}
        LinkProps={{
          href: "#",
        }}
      />
      <ContentPosts
        as="h1"
        date="06/10/2025"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias
          corporis asperiores ea ipsam itaque cumque minima dolorem repellat fugiat
          nesciunt eos, amet mollitia quae ad velit? Nostrum, velit illo?"
        title="itaque cumque minima dolorem repellat fugiat"
      />
    </section>
  );
}
