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
      <div className="bg-red-600 w-full py-2 px-6 text-white flex gap-2">
        <CalculatorIcon className="h-6 w-6" />
        <p>Расчёт стоимости ипотеки</p>
      </div>
      <main className="w-full p-6">{children}</main>
    </PageWrapper>
  );
}
