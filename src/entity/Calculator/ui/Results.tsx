import { ReactComponent as HumanIcon } from "@/shared/assets/icons/moneyHuman.svg";
import { ReactComponent as PcIcon } from "@/shared/assets/icons/moneyPc.svg";

interface ResultsProps {
  result: number;
  className?: string;
}

function Results(props: ResultsProps) {
  const { className, result } = props;
  const fullData = result > 0;

  const icon = fullData ? (
    <HumanIcon
      className={`h-24 w-24 stroke-[0.3] stroke-red-800 hidden md:block`}
    />
  ) : (
    <PcIcon
      className={`h-24 w-24 stroke-[0.3] stroke-red-800 hidden md:block`}
    />
  );

  const text = fullData ? (
    <span className={`flex justify-between flex-col w-full`}>
      <span className={`block`}>Примерная стоимость помещения:</span>
      <span className={`block text-4xl text-red-600 whitespace-nowrap`}>
        {"≈ "}
        {new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUB",
        }).format(result)}
      </span>
    </span>
  ) : (
    <span className={`w-full`}>
      Заполните характеристики для расчёта примерной стоимости
    </span>
  );

  return (
    <div
      className={`${className} w-full mt-6 p-6 bg-orange-50 grid grid-cols-1 md:grid-cols-[max-content_1fr] items-center gap-3 md:gap-6 overflow-hidden`}
    >
      {icon}
      {text}
    </div>
  );
}

export default Results;
