import Link from "next/link";

export function Footer() {
  return (
    <footer className="pb-16">
      <div>
        <span className="text-sm text-zinc-700 dark:text-zinc-300">
          Copyright &copy; {new Date().getFullYear()} -{" "}
        </span>
        <Link className="font-bold" href={"/"}>
          <span className="text-purple-600 dark:text-purple-400">Ignum</span>
          Blog
        </Link>
      </div>
    </footer>
  );
}
