import { CheckIcon } from "@heroicons/react/20/solid";
import { InputHTMLAttributes, memo } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface AppCheckboxProps extends HTMLInputProps {
  className?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
  trueText?: string | null;
  falseText?: string | null;
}

const AppCheckbox = memo((props: AppCheckboxProps) => {
  const {
    className,
    checked = false,
    onChange,
    autoFocus = false,
    readOnly = false,
    trueText = "",
    falseText = "",
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.checked);
  };

  return (
    <span className={`${className} relative mt-1 `}>
      <input
        className={`relative align-[-5px] h-6 w-6 mr-1 bg-stone-100 rounded appearance-none hover:bg-stone-200 active:bg-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-500 text-stone-700`}
        type="checkbox"
        checked={checked}
        onChange={onChangeHandler}
        readOnly={readOnly}
        autoFocus={autoFocus}
        {...otherProps}
      />

      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2">
        <CheckIcon
          className={`h-6 w-6 text-stone-400 ${
            checked ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
      </span>
      <label>{checked ? trueText : falseText}</label>
    </span>
  );
});

export default AppCheckbox;
