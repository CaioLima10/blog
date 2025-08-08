import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface CoverImagePostProps {
  ImageProps: React.ComponentProps<typeof Image>;
  LinkProps: React.ComponentProps<typeof Link>;
}

export function CoverImagePost({ ImageProps, LinkProps }: CoverImagePostProps) {
  return (
    <Link
      href={LinkProps.href}
      className="w-full h-full overflow-hidden rounded-xl"
    >
      <Image
        className={clsx(
          "group-hover:scale-105 transition w-full h-full object-cover object-center"
        )}
        {...ImageProps}
      />
    </Link>
  );
}
