import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="min-h-screen w-screen">
      <div className="lg:max-w-screen-lg w-[95%] flex flex-col items-center justify-center mx-auto">
        {children}
      </div>
    </div>
  );
}
