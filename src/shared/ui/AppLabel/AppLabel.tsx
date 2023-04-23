import { memo } from "react";

interface AppLabelProps {
  className?: string;
  text?: string;
}

const AppLabel = memo((props: AppLabelProps) => {
  const { className, text = "" } = props;

  return (
    <span
      className={`${className} text-stone-400 mt-4 first:mt-0 md:mt-0 md:text-right md:mx-1 xl:ml-6`}
    >
      {text}:
    </span>
  );
});

export default AppLabel;
