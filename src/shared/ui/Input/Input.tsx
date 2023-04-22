import { InputHTMLAttributes, memo } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "placeholder" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  placeholder?: string | null;
  readOnly?: boolean;
}

const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder = "",
    autoFocus = false,
    readOnly = false,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  };

  return (
    <input
      className={`${className} bg-stone-100 rounded px-2 py-1 appearance-none hover:bg-stone-200 active:bg-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-500 text-stone-700`}
      type={type}
      value={type === "number" ? Number(value) : String(value)}
      onChange={onChangeHandler}
      placeholder={placeholder || ""}
      readOnly={readOnly}
      autoFocus={autoFocus}
      {...otherProps}
    />
  );
});

export default Input;
