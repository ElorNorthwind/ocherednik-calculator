import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

export interface AppListboxItem {
  id: number | string;
  name: string;
  unavailable?: boolean;
  modifier?: number;
}

interface AppListboxProps {
  items: AppListboxItem[];
  selectedItem: AppListboxItem;
  onChange: (value: AppListboxItem) => void; //Dispatch<SetStateAction<{ id: number; name: string; }>>; //Dispatch<SetStateAction<{ id: number; name: string; }>>;
  className?: string;
}

function AppListbox({ items, selectedItem, onChange }: AppListboxProps) {
  return (
    <div className="w-96 relative">
      <Listbox value={selectedItem} by="id" onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button className="text-left w-full bg-stone-100 rounded px-2 py-1 appearance-none hover:bg-stone-200 active:bg-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-500 text-stone-700">
            <span className="block">{selectedItem.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-stone-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-stone-100 py-1 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
            {items.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                disabled={item.unavailable}
                className="flex px-2 py-1 ui-active:bg-stone-500 ui-active:text-white ui-not-active:ui-disabled:text-stone-300 ui-not-active:text-stone-800"
              >
                <CheckIcon className="opacity-0 ui-selected:opacity-100 h-5 w-5 mr-2 text-stone-400" />
                {item.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}

export default AppListbox;
