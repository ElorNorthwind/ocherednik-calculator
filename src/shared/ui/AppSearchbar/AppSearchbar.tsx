import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
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
  const searchEmpty = useMemo<Adress>(
    () => ({ id: 0, name: "Введите адрес для поиска", ao: "", area: "", unavailable: true }),
    []
  );
  const noneFound = useMemo<Adress>(
    () => ({ id: 0, name: "Адрес не найден", ao: "", area: "", unavailable: true }),
    []
  );
  const searchPending = useMemo<Adress>(
    () => ({ id: 0, name: "Загрузка...", ao: "", area: "", unavailable: true }),
    []
  );

  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [foundItems, setFoundItems] = useState([searchEmpty]);

  const formatAdressSearch = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (adresses: any[]) => {
      if (adresses?.length && adresses.length > 0) {
        return adresses.map((adress) => {
          return {
            id: adress?.Number || 0,
            name: adress?.Cells?.SIMPLE_ADDRESS || "Некорректный адрес",
            ao: adress?.Cells?.ADM_AREA || "АО",
            area: adress?.Cells?.P5 || "Район",
            unavailable: adress?.Number ? false : true,
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
  }, [query, searchEmpty, formatAdressSearch]);

  const Option = (item: Adress) => (
    <Combobox.Option
      key={item.id}
      value={item}
      disabled={item.unavailable}
      className="flex px-2 py-1 ui-active:bg-stone-500 ui-active:text-white ui-not-active:ui-disabled:text-stone-300 ui-not-active:text-stone-800 ui-not-active:ui-disabled:cursor-default ui-not-active:cursor-pointer select-none"
    >
      <CheckIcon className="opacity-0 ui-selected:opacity-100 h-5 w-5 mr-2 text-stone-400" />
      {isLoading ? <AppSpinner /> : item.name}
    </Combobox.Option>
  );

  return (
    <div className={`w-full relative ${className}`}>
      <Combobox value={selectedItem} by="id" onChange={onChange} disabled={readOnly}>
        <div className="relative">
          <Combobox.Input
            as={Fragment}
            onChange={debounce((e) => setQuery(e.target.value), 300)}
            displayValue={(selectedItem: Adress) => selectedItem?.name || ""}
          >
            <input
              type="text"
              autoComplete="off"
              placeholder="выберете вариант"
              className={`text-left w-full bg-stone-100 text-stone-700 rounded px-3 py-2 appearance-none ${
                !readOnly &&
                "hover:bg-stone-200 active:bg-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-500"
              }`}
            />
          </Combobox.Input>
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className={`h-5 w-5 text-stone-400 ${readOnly && "text-stone-300"} print:hidden`}
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Combobox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded bg-stone-100 py-1 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
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
