import { ChoiceOption } from "@/shared/config/scales";
import AppBadge from "@/shared/ui/AppBadge/AppBadge";
import AppCombobox from "@/shared/ui/AppCombobox/AppCombobox";
import AppInput from "@/shared/ui/AppInput/AppInput";
import AppLabel from "@/shared/ui/AppLabel/AppLabel";
import AppListbox from "@/shared/ui/AppListBox/AppListBox";

interface ListboxCalculatorFieldProps {
  type: "coeficient" | "currency" | "utility";
  items: ChoiceOption[];
  selectedItem: ChoiceOption | null;
  onChange: (value: ChoiceOption | null) => void;
  labelText: string;
  badgeTitle: string;
  isCombobox?: boolean;
}

interface NumberCalculatorFieldProps {
  type: "number";
  value: string | number | null;
  onChange: (value: string | number | null) => void;
  labelText: string;
  badgeTitle: string;
}

type CalculatorFieldProps = ListboxCalculatorFieldProps | NumberCalculatorFieldProps;

export default function CalculatorField(props: CalculatorFieldProps) {
  const Label = <AppLabel text={props?.labelText} />;
  let Input;
  if (props.type === "coeficient" || props.type === "currency" || props.type === "utility") {
    Input = props?.isCombobox ? (
      <AppCombobox
        items={props.items}
        selectedItem={props.selectedItem}
        onChange={props.onChange as (value: ChoiceOption | null) => void}
      />
    ) : (
      <AppListbox
        items={props.items}
        selectedItem={props.selectedItem}
        onChange={props.onChange as (value: ChoiceOption | null) => void}
      />
    );
  } else if (props.type === "number") {
    Input = (
      <AppInput
        value={props.value}
        type="number"
        onChange={props.onChange as (value: string | number | null) => void}
      />
    );
  }

  let badgeText;

  switch (props.type) {
    case "coeficient":
      badgeText =
        (props?.selectedItem?.scale &&
          new Intl.NumberFormat("ru-RU", { minimumFractionDigits: 2 }).format(props.selectedItem.scale)) ||
        "";
      break;
    case "currency":
      badgeText =
        (props?.selectedItem?.scale &&
          new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
          }).format(props.selectedItem.scale)) ||
        "";
      break;
    case "number":
      badgeText =
        (props?.value && new Intl.NumberFormat("ru-RU", { minimumFractionDigits: 1 }).format(props.value as number)) ||
        "";
      break;
  }

  const Badge =
    props.type === "utility" ? (
      <div> </div>
    ) : (
      <AppBadge title={props.badgeTitle} text={badgeText} className="hidden md:block print:block" />
    );

  return (
    <>
      {Label}
      {Input}
      {Badge}
    </>
  );
}
