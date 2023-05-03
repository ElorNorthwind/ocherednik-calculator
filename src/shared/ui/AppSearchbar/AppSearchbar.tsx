import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, Fragment, useState, useMemo, useCallback } from "react";
import { Adress } from "@/shared/types/adresses";
import getAdressSearch from "@/shared/lib/api/getAdressSearch";
import debounce from "@/shared/lib/debounce/debounce";
import AppSpinner from "@/shared/ui/AppSpinner/AppSpinner";

interface AppSearchbarProps<T> {
  selectedItem?: T | null;
  onChange: (value: T | null) => void; //Dispatch<SetStateAction<{ id: number; name: string; }>>; //Dispatch<SetStateAction<{ id: number; name: string; }>>;
  className?: string;
  readOnly?: boolean;
}

function AppSearchbar({ selectedItem, onChange, className, readOnly }: AppSearchbarProps<Adress>) {
  const searchEmpty = useMemo<Adress>(() => ({ id: "0", text: "Введите адрес для поиска", unavailable: true }), []);
  const noneFound = useMemo<Adress>(() => ({ id: "0", text: "Адрес не найден", unavailable: true }), []);
  const searchPending = useMemo<Adress>(() => ({ id: "0", text: "Загрузка...", unavailable: true }), []);

  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [foundItems, setFoundItems] = useState([searchEmpty]);

  const formatAdressSearch = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (adresses: any[]) => {
      if (adresses?.length && adresses.length > 0) {
        return adresses.map((adress) => {
          return {
            id: adress?.id || "",
            text: adress?.text || "Некорректный адрес",
            unavailable: adress?.id !== "" ? false : true,
          };
        });
      } else return [noneFound];
    },
    [noneFound]
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const items = await getAdressSearch(query);
      onChange(null);
      setFoundItems(formatAdressSearch(items));
      setIsLoading(false);
    };

    query === "" ? setFoundItems([searchEmpty]) : fetchData();
  }, [query, searchEmpty, formatAdressSearch, onChange]);

  const Option = (item: Adress) => (
    <Combobox.Option
      key={item.id}
      value={item}
      disabled={item.unavailable}
      className="flex px-2 py-1 ui-active:bg-stone-500 ui-active:text-white ui-not-active:ui-disabled:text-stone-300 ui-not-active:text-stone-800 ui-not-active:ui-disabled:cursor-default ui-not-active:cursor-pointer select-none"
    >
      <CheckIcon className="opacity-0 ui-selected:opacity-100 h-5 w-5 mr-2 text-stone-400" />
      {isLoading ? <AppSpinner className={`mx-auto`} /> : item.text}
    </Combobox.Option>
  );

  return (
    <div className={`w-full relative print:hidden ${className}`}>
      <Combobox value={selectedItem} by="id" onChange={onChange} disabled={readOnly}>
        <div
          className={`relative gap-1 px-2 flex flex-row bg-stone-100 text-stone-700 rounded  ${
            !readOnly && "hover:bg-stone-200 active:bg-stone-300 focus-within:ring-1 focus-within:ring-stone-500"
          }`}
        >
          <Combobox.Button className="flex items-center">
            <MagnifyingGlassIcon
              className={`h-5 w-5 text-stone-400 hover:text-stone-500 ${readOnly && "text-stone-300 "} print:hidden`}
              aria-hidden="true"
            />
          </Combobox.Button>
          <Combobox.Input
            as={Fragment}
            onChange={debounce((e) => setQuery(e.target.value), 250)}
            displayValue={(selectedItem: Adress) => selectedItem?.text || ""}
          >
            <input
              type="text"
              autoComplete="off"
              placeholder="поиск по адресу"
              className={`text-left w-full focus:outline-none bg-transparent py-2`}
            />
          </Combobox.Input>
          <Transition
            as={Fragment}
            show={!!selectedItem}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-250"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 pointer-events-none"
          >
            <button onClick={() => onChange(null)} className={`flex items-center`}>
              <XMarkIcon className="h-5 w-5 text-stone-400 hover:text-stone-500 print:hidden" />
            </button>
          </Transition>
        </div>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Combobox.Options className="z-10 absolute mt-1 max-h-[90vh] w-full overflow-auto rounded bg-stone-100 py-1 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
            {isLoading ? (
              Option(searchPending)
            ) : (
              <>
                {foundItems.map((item) => Option(item))}
                {foundItems.length === 0 && Option(noneFound)}
              </>
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
}

export default AppSearchbar;
