import AppListbox, { AppListboxItem } from "@/shared/ui/AppListBox/AppListBox";
import Input from "@/shared/ui/Input/Input";
import Layout from "@/widgets/Layout/Layout";
import { useState } from "react";

const people: AppListboxItem[] = [
  { id: 1, name: "Иваанов Иван", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

function App() {
  const [val, setVal] = useState(people[0]);
  const onFieldChange = (value: AppListboxItem) => {
    console.log(JSON.stringify(value));
    setVal(value);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-serif text-red-600">Гуляние мамок</h1>
      <p className="text-xl">популярные ссылки</p>
      <AppListbox items={people} selectedItem={val} onChange={onFieldChange} />
      <Input value={23} type="number" />
    </Layout>
  );
}

export default App;
