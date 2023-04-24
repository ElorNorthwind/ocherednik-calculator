import AppInput from "@/shared/ui/AppInput/AppInput";
import AppListbox from "@/shared/ui/AppListBox/AppListBox";
import { useState } from "react";
import { ChoiceOption, Scales } from "@/shared/config/scales";
import AppLabel from "@/shared/ui/AppLabel/AppLabel";
import Results from "./Results";

interface CalculatorProps {
  className?: string;
  scales: Scales;
}

function Calculator(props: CalculatorProps) {
  const { className, scales } = props;
  const { years, repairs, wear, series, ao, area } = scales;

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

  const result =
    (seriesChoice?.scale || 0) *
    (yearsChoice?.scale || 0) *
    (wearChoice?.scale || 0) *
    (areaChoice?.scale || 0) *
    (repairsChoice?.scale || 0) *
    (Number(meters) || 0);

  return (
    <div className={`${className}`}>
      <h1 className="text-3xl mt-3 mb-1 font-serif text-red-600">Характеристики для расчёта</h1>
      <form
        className={`border-t pt-3 border-stone-400 grid gap-0 md:gap-1 items-center grid-cols-1 md:grid-cols-[max-content_1fr] xl:grid-cols-[max-content_1fr_max-content_1fr]`}
      >
        <AppLabel text="лет на учёте" />
        <AppListbox items={years} selectedItem={yearsChoice} onChange={setYearsChoice} />

        <AppLabel text="серия дома" />
        <AppListbox items={series} selectedItem={seriesChoice} onChange={setSeriesChoice} />

        <AppLabel text="срок эксплуатации" />
        <AppListbox items={wear} selectedItem={wearChoice} onChange={setWearChoice} />

        <AppLabel text="округ" />
        <AppListbox items={ao.filter((a) => a.unavailable === false)} selectedItem={aoChoice} onChange={onAoChange} />

        <AppLabel text="район" />
        <AppListbox
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
        <AppLabel text="площадь квартиры" />
        <AppInput value={meters} type="number" onChange={setMeters} />

        <AppLabel text="состояние квартиры" />
        <AppListbox items={repairs} selectedItem={repairsChoice} onChange={setRepairsChoice} readOnly={true} />
      </form>
      <Results result={result} />
    </div>
  );
}

export default Calculator;
