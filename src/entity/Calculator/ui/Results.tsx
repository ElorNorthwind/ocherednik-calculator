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
      bgClass="bg-orange-100 group-hover:scale-110 transition-transform duration-200"
      iconClass="stroke-orange-800"
      hasBg={true}
      className="hidden md:block print:md:hidden"
    />
  );

  const text = fullData ? (
    <span className={`flex justify-between flex-col w-full`}>
      <span className={`block print:text-right`}>Примерная стоимость помещения:</span>
      <span className={`block text-4xl text-red-600 whitespace-nowrap print:text-right`}>
        {"≈ "}
        {new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUB",
        }).format(result)}
      </span>
    </span>
  ) : (
    <span className={`w-full`}>Заполните характеристики для расчёта примерной стоимости</span>
  );

  return (
    <div
      className={`${className} relative group w-full mt-3 p-6 bg-orange-50 grid grid-cols-1 md:grid-cols-[max-content_1fr] items-center gap-3 md:gap-6 overflow-hidden print:border-t print:border-stone-400`}
    >
      <PrinterIcon
        className="z-3 h-12 w-12 absolute right-3 top-3 stroke-orange-200 stroke-[1.6] hidden print:opacity-0 group-hover:block cursor-pointer"
        onClick={() => window.print()}
      />
      {icon}
      {text}
    </div>
  );
}

export default Results;
