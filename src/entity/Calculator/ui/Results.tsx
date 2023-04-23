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
    <HumanIcon className={`h-24 w-24 stroke-[0.3] stroke-red-800`} />
  ) : (
    <PcIcon className={`h-24 w-24 stroke-[0.3] stroke-red-800`} />
  );

  const text = fullData ? (
    <span className={`flex justify-between flex-col`}>
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
    <span>Заполните характеристики для расчёта примерной стоимости</span>
  );

  return (
    <div
      className={`${className} mt-6 p-6 bg-orange-50 grid grid-cols-[max-content_1fr] items-center gap-3 md:gap-6`}
    >
      {icon}
      {text}
    </div>
  );
}

export default Results;
