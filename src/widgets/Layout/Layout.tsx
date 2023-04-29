import PageWrapper from "@/shared/ui/PageWrapper/PageWrapper";
import { ReactNode } from "react";
import { CalculatorIcon } from "@heroicons/react/24/outline";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <PageWrapper>
      <div className="bg-red-600 w-full h-8 px-6 text-white flex items-center gap-2 print:hidden">
        <CalculatorIcon className="h-6 w-6" />
        <p>Расчёт выкупной стоимости</p>
      </div>
      <main className="w-full min-h-[calc(100vh-3.5rem)] relative px-6 flex flex-col justify-between">{children}</main>
      {/* <div className="bg-stone-500 w-full py-2 px-6 text-white flex gap-2">
        <p>Расчёт стоимости ипотеки</p>
      </div> */}
    </PageWrapper>
  );
}
