import { useState, useEffect } from "react";
import { ChoiceOption, Scales } from "@/shared/config/scales";
import Results from "./Results";
import CalculatorField from "@/widgets/CalculatorField/CalculatorField";
import { Adress } from "@/shared/types/adresses";
import AppSearchbar from "@/shared/ui/AppSearchbar/AppSearchbar";
import getAdressDetails from "@/shared/lib/api/getAdressDetails";
import AppSpinner from "@/shared/ui/AppSpinner/AppSpinner";

interface CalculatorProps {
  className?: string;
  scales: Scales;
}

function Calculator(props: CalculatorProps) {
  const { className, scales } = props;
  const { years, komn, repairs, wear, series, ao, area } = scales;

  const [komnChoice, setKomnChoice] = useState<ChoiceOption | null>(komn[0]);
  const [yearsChoice, setYearsChoice] = useState<ChoiceOption | null>(null);
  const [seriesChoice, setSeriesChoice] = useState<ChoiceOption | null>(null);
  const [wearChoice, setWearChoice] = useState<ChoiceOption | null>(null);
  const [aoChoice, setAoChoice] = useState<ChoiceOption | null>(null);
  const onAoChange = (value: ChoiceOption | null) => {
    const changed = aoChoice !== value;
    setAoChoice(value);
    setAearChoice(changed ? null : areaChoice);
  };

  const [areaChoice, setAearChoice] = useState<ChoiceOption | null>(null);
  const onAreaChange = (value: ChoiceOption | null) => {
    setAearChoice(value);
    if (!aoChoice) {
      setAoChoice(ao.find((a) => a.id === value?.parentId) || null);
    }
  };
  const [meters, setMeters] = useState<string | number | null>(null);
  const [repairsChoice, setRepairsChoice] = useState<ChoiceOption | null>(repairs[0]);
  const [adress, setAdress] = useState<Adress | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Устанавливаем результаты поиска!
  useEffect(() => {
    const fetchAdressInfo = async () => {
      setIsLoading(true);
      const adressInfo = await getAdressDetails(adress?.id || "");

      if (adressInfo?.ao && adressInfo?.ao !== "") {
        setAoChoice(ao.find((item) => item.name === adressInfo.ao) || null);
      } else {
        setAoChoice(null);
      }

      if (adressInfo?.area && adressInfo?.area !== "") {
        setAearChoice(area.find((item) => item.name === adressInfo.area) || null);
      } else {
        setAearChoice(null);
      }

      if (adressInfo?.year && adressInfo?.year !== "") {
        const yearNum = Number(adressInfo?.year);
        if (!isNaN(yearNum) && yearNum > 0) {
          const age = new Date().getFullYear() - yearNum;
          let wearChoice: ChoiceOption;
          if (age < 5) {
            wearChoice = wear[0];
          } else if (age < 10) {
            wearChoice = wear[1];
          } else if (age < 20) {
            wearChoice = wear[2];
          } else if (age < 30) {
            wearChoice = wear[3];
          } else {
            wearChoice = wear[4];
          }
          setWearChoice(wearChoice || null);
        }
      } else {
        setWearChoice(null);
      }

      if (adressInfo?.series && adressInfo?.series !== "" && adressInfo?.series !== "нет данных") {
        if (adressInfo?.series.toLowerCase().includes("индивид")) {
          setSeriesChoice(series[1]);
        } else {
          setSeriesChoice(series[0]);
        }
      } else {
        setSeriesChoice(null);
      }
      setIsLoading(false);
    };

    if (adress?.id && adress.id !== "") {
      fetchAdressInfo();
    }
  }, [adress, ao, area, series, wear]);

  const result =
    (seriesChoice?.scale || 0) *
    (yearsChoice?.scale || 0) *
    (wearChoice?.scale || 0) *
    (areaChoice?.scale || 0) *
    (repairsChoice?.scale || 0) *
    (Number(meters) || 0);

  return (
    <div className={`${className} my-3`}>
      <AppSearchbar selectedItem={adress} onChange={setAdress} className="mb-1" />
      <h1 className="text-2xl md:text-3xl mb-1 font-serif text-red-600 whitespace-nowrap">
        Характеристики для расчёта
      </h1>
      <form
        className={`border-t pt-3 border-stone-400 grid  gap-0 md:gap-2 print:gap-2 items-center grid-cols-1 md:grid-cols-[max-content_1fr_max-content] print:grid-cols-[max-content_1fr_max-content] `}
      >
        {isLoading && (
          <div
            className={` z-10 absolute top-[6.1rem] h-[19rem] md:h-[12.6rem] inset-x-0  backdrop-blur flex justify-center`}
          >
            <AppSpinner className={`my-auto`} />
          </div>
        )}
        <CalculatorField
          labelText="округ"
          badgeTitle=""
          type="utility"
          items={ao.filter((a) => a.unavailable === false)}
          selectedItem={aoChoice}
          onChange={onAoChange}
        />

        <CalculatorField
          labelText="район"
          badgeTitle="Ктерр"
          type="coeficient"
          isCombobox={true}
          items={
            aoChoice
              ? area.filter((a) => a.parentId === aoChoice.id)
              : area.filter((a) =>
                  ao.filter((okrug) => okrug.unavailable === false).some((okrug) => okrug.id === a.parentId)
                )
          }
          selectedItem={areaChoice}
          onChange={onAreaChange}
        />

        <CalculatorField
          labelText="серия дома"
          badgeTitle="Cсерии"
          type="currency"
          items={series}
          selectedItem={seriesChoice}
          onChange={setSeriesChoice}
        />

        <CalculatorField
          labelText="срок эксплуатации"
          badgeTitle="Кизн"
          type="coeficient"
          items={wear}
          selectedItem={wearChoice}
          onChange={setWearChoice}
        />

        <CalculatorField
          labelText="лет на учёте"
          badgeTitle="Кльгот"
          type="coeficient"
          items={years}
          selectedItem={yearsChoice}
          onChange={setYearsChoice}
        />

        <CalculatorField
          labelText="площадь помещения"
          badgeTitle="Плщд"
          type="number"
          value={meters}
          onChange={setMeters}
        />

        <CalculatorField
          labelText="тип помещения"
          badgeTitle="Кком"
          type="coeficient"
          items={komn}
          selectedItem={komnChoice}
          onChange={setKomnChoice}
        />

        <CalculatorField
          labelText="состояние квартиры"
          badgeTitle="Ксост"
          type="coeficient"
          items={repairs}
          selectedItem={repairsChoice}
          onChange={setRepairsChoice}
        />
      </form>
      <Results result={result} />
    </div>
  );
}

export default Calculator;
