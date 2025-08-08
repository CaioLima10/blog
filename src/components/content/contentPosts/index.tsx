import { HeadingPost } from "../headingPost";

interface ContentPostsProps {
  text: string;
  date: string;
  heading: string;
  title: string;
  as: "h1" | "h2";
}

export function ContentPosts({
  date,
  text,
  as = "h2",
  heading,
  title,
}: ContentPostsProps) {
  return (
    <div className="flex flex-col justify-center gap-4 p-5">
      <div>
        <time
          className="text-zinc-700 dark:text-zinc-400 text-sm"
          dateTime="2025-10-06"
          title={title}
        >
          {date}
        </time>
        <HeadingPost url="#" as={as} text={heading} />
      </div>
      <p>{text}</p>
    </div>
  );
}
