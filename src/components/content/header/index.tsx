import { Theme } from "@/components/theme";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between py-8">
      <div>
        <h1>
          <a href="#" className="text-4xl/normal md:text-6xl/normal font-bold">
            <span className="text-purple-500">Ignum</span> Blog
          </a>
        </h1>
      </div>
      <div>
        <Theme />
      </div>
    </header>
  );
}
