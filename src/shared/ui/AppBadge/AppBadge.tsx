import { memo } from "react";

interface AppBadgeProps {
  className?: string;
  title?: string;
  text?: string;
}

const AppBadge = memo((props: AppBadgeProps) => {
  const { className, title = "", text = "" } = props;
  const textShown = text !== "";

  return (
    <div className={`${className} flex flex-col min-w-[6.4rem]`}>
      <span
        className={`text-stone-400 text-left mr-1 block transition-transform duration-300 ${
          textShown && "absolute -translate-y-[0.6rem] -translate-x-1 scale-90"
        }`}
      >
        {textShown ? title + ":" : title}
      </span>
      <span
        className={`relative -bottom-[0.4rem] text-red-600 font-bold block transition-opacity  duration-500 ${
          textShown ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </span>
    </div>
  );
});

export default AppBadge;
