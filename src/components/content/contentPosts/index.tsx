import { HeadingPost } from "../headingPost";

interface ContentPostsProps {
  text: string;
  date: string;
  heading: string;
  title: string;
  author: string;
  as: "h1" | "h2";
}

export function ContentPosts({
  date,
  text,
  as = "h2",
  heading,
  title,
  author,
}: ContentPostsProps) {
  return (
    <div className="flex flex-col justify-center gap-4 p-5">
      <div>
        <div className="flex items-center justify-between mb-5">
          <time
            className="text-zinc-700 dark:text-zinc-400 text-sm"
            dateTime="2025-10-06"
            title={title}
          >
            {date}
          </time>
          <div className=" text-sm">
            Autor:{" "}
            <span className="text-purple-600 dark:text-purple-400">
              {author}
            </span>
          </div>
        </div>
        <HeadingPost url="#" as={as} text={heading} />
      </div>
      <p>{text}</p>
    </div>
  );
}
