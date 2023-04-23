import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper(props: PageWrapperProps) {
  const { children } = props;

  return (
    <div className="w-full min-h-screen md:w-3/4 bg-white shadow-xl mx-auto">
      {children}
    </div>
  );
}
