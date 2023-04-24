import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper(props: PageWrapperProps) {
  const { children } = props;

  return (
    <div className="relative w-full h-full min-h-screen md:w-3/4 max-w-3xl bg-white shadow-xl mx-auto">{children}</div>
  );
}
