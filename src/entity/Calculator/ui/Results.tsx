import { ReactComponent as SearchIcon } from "@/shared/assets/icons/moneySearch.svg";
import { ReactComponent as PointIcon } from "@/shared/assets/icons/moneyPoint.svg";
import AppIcon from "@/shared/ui/AppIcon/AppIcon";
import { PrinterIcon } from "@heroicons/react/24/outline";
interface ResultsProps {
  result: number;
  className?: string;
}

function Results(props: ResultsProps) {
  const { className, result } = props;
  const fullData = result > 0;

  const icon = (
    <AppIcon
      Svg={fullData ? PointIcon : SearchIcon}
      bgClass="bg-orange-100"
      iconClass="stroke-orange-800"
      hasBg={true}
      className="hidden md:block print:md:hidden"
    />
  );

  const text = (
    <span className={`flex justify-between flex-col w-full relative`}>
      <span
        className={`block absoulte w-full print:text-right transition-all duration-300 ${
          fullData ? "-translate-y-6 whitespace-nowrap" : "translate-y-0"
        }`}
      >
        {fullData ? "Примерная стоимость помещения:" : "Заполните характеристики для расчёта примерной стоимости"}
      </span>
      <span
        className={`block absolute w-full whitespace-nowrap text-4xl text-red-600 print:text-right transition-opacity delay-100 duration-300 ${
          fullData ? "opacity-100" : "opacity-0"
        }`}
      >
        {fullData
          ? "≈ " +
            new Intl.NumberFormat("ru-RU", {
              style: "currency",
              currency: "RUB",
            }).format(result)
          : ""}
      </span>
    </span>
  );

  return (
    <div
      className={`${className} min-h-28 relative group w-full mt-3 p-6 bg-orange-50 print:bg-transparent grid grid-cols-1 md:grid-cols-[max-content_1fr] items-center gap-3 md:gap-6 overflow-hidden print:border-t print:border-stone-400`}
    >
      <PrinterIcon
        className={`z-3 h-12 w-12 absolute right-3 top-3 stroke-orange-200 stroke-[1.6] block transition-opacity duration-300 ${
          fullData ? "print:hidden cursor-pointer opacity-100" : "opacity-0"
        }`}
        onClick={() => window.print()}
      />
      {icon}
      {text}
    </div>
  );
}

export default Results;
