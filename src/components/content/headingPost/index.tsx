import Link from "next/link";

interface HeadingPostProps {
  text: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
}

export function HeadingPost({
  text,
  url,
  as: Heading = "h2",
}: HeadingPostProps) {
  const headingClassMap = {
    h1: "text-2xl sm:text-3xl font-bold",
    h2: "text-xl sm:text-2xl font-bold",
  };
  return (
    <Heading className={headingClassMap[Heading]}>
      <Link
        className="hover:text-purple-600 dark:hover:text-purple-500"
        href={url}
      >
        {text}
      </Link>
    </Heading>
  );
}
