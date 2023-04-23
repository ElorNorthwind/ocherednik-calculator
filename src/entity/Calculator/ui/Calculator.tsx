import AppInput from "@/shared/ui/AppInput/AppInput";
import AppListbox from "@/shared/ui/AppListBox/AppListBox";
import { useState } from "react";
import { ChoiceOption, Scales } from "@/shared/config/scales";
import AppLabel from "@/shared/ui/AppLabel/AppLabel";
import { ReactComponent as HumanIcon } from "@/shared/assets/icons/moneyHuman.svg";
import { ReactComponent as PcIcon } from "@/shared/assets/icons/moneyPc.svg";
import Results from "./Results";

interface CalculatorProps {
  className?: string;
  scales: Scales;
}

function Calculator(props: CalculatorProps) {
  const { className, scales } = props;
  const { objectType, wear, series, ao, area } = scales;

  const [seriesChoice, setSeriesChoice] = useState<ChoiceOption | null>(
    series[0]
  );
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
  const [meters, setMeters] = useState<string | number>(0);
  const [objectTypeChoice, setObjectTypeChoice] = useState<ChoiceOption | null>(
    objectType[0]
  );

  const result =
    (seriesChoice?.scale || 1) *
    (wearChoice?.scale || 1) *
    (areaChoice?.scale || 1) *
    (objectTypeChoice?.scale || 1) *
    (Number(meters) || 0);

  return (
    <div className={`${className}`}>
      <h1 className="text-3xl mt-3 mb-1 font-serif text-red-600">
        Характеристики для расчёта
      </h1>
      <form
        className={`border-t pt-3 border-stone-400 grid gap-0 md:gap-1 items-center grid-cols-1 md:grid-cols-[max-content_1fr] xl:grid-cols-[max-content_1fr_max-content_1fr]`}
      >
        <AppLabel text="серия дома" />
        <AppListbox
          items={series}
          selectedItem={seriesChoice}
          onChange={setSeriesChoice}
        />

        <AppLabel text="срок эксплуатации" />
        <AppListbox
          items={wear}
          selectedItem={wearChoice}
          onChange={setWearChoice}
        />

        <AppLabel text="округ" />
        <AppListbox items={ao} selectedItem={aoChoice} onChange={onAoChange} />

        <AppLabel text="район" />
        <AppListbox
          items={
            aoChoice ? area.filter((a) => a.parentId === aoChoice.id) : area
          }
          selectedItem={areaChoice}
          onChange={onAreaChange}
        />
        <AppLabel text="площадь квартиры" />
        <AppInput value={meters} type="number" onChange={setMeters} />

        <AppLabel text="тип помещения" />
        <AppListbox
          items={objectType}
          selectedItem={objectTypeChoice}
          onChange={setObjectTypeChoice}
          readOnly={true}
        />
      </form>
      <Results result={result} />
    </div>
  );
}

export default Calculator;
