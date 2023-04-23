import Calculator from "@/entity/Calculator/ui/Calculator";
import { scales, ChoiceOption } from "@/shared/config/scales";
import AppCheckbox from "@/shared/ui/AppCheckbox/AppCheckbox";
import AppInput from "@/shared/ui/AppInput/AppInput";
import AppListbox from "@/shared/ui/AppListBox/AppListBox";
import Layout from "@/widgets/Layout/Layout";
import { useState } from "react";

const people: ChoiceOption[] = [
  { id: 1, name: "Иваанов Иван", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

function App() {
  const [val, setVal] = useState<ChoiceOption | null>(people[0]);

  const [checked, setChecked] = useState(false);

  return (
    <Layout>
      <Calculator scales={scales} />
    </Layout>
  );
}

export default App;
