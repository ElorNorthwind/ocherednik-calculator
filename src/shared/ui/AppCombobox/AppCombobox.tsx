import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { ChoiceOption } from "@/shared/config/scales";

interface AppComboboxProps {
  items: ChoiceOption[];
  selectedItem?: ChoiceOption | null;
  onChange: (value: ChoiceOption | null) => void; //Dispatch<SetStateAction<{ id: number; name: string; }>>; //Dispatch<SetStateAction<{ id: number; name: string; }>>;
  className?: string;
  readOnly?: boolean;
}

function AppCombobox({ items, selectedItem, onChange, className, readOnly }: AppComboboxProps) {
  const [query, setQuery] = useState("");
  const filteredItems =
    query === ""
      ? items
      : items.filter((item: ChoiceOption) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  const Option = (item: ChoiceOption) => (
    <Combobox.Option
      key={item.id}
      value={item}
      disabled={item.unavailable}
      className="flex px-2 py-1 ui-active:bg-stone-500 ui-active:text-white ui-not-active:ui-disabled:text-stone-300 ui-not-active:text-stone-800 ui-not-active:ui-disabled:cursor-default ui-not-active:cursor-pointer select-none"
    >
      <CheckIcon className="opacity-0 ui-selected:opacity-100 h-5 w-5 mr-2 text-stone-400" />
      {item.name}
    </Combobox.Option>
  );

  return (
    <div className={`w-full relative ${className}`}>
      <Combobox value={selectedItem} by="id" onChange={onChange} disabled={readOnly}>
        <div className="relative">
          <Combobox.Input
            onChange={(e) => setQuery(e.target.value)}
            displayValue={(selectedItem: ChoiceOption) => selectedItem?.name || ""}
            placeholder="выберете вариант"
            className={`text-left w-full bg-stone-100 text-stone-700 rounded px-3 py-2 appearance-none ${
              !readOnly && "hover:bg-stone-200 active:bg-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-500"
            }  `}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className={`h-5 w-5 text-stone-400 ${readOnly && "text-stone-300"} print:hidden`}
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Combobox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded bg-stone-100 py-1 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
            {filteredItems.map((item) => Option(item))}
            {filteredItems.length === 0 && Option({ id: 0, name: "Вариант не найден", unavailable: true })}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
}

export default AppCombobox;
