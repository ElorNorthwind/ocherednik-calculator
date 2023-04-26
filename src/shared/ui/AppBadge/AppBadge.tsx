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
    <div className={`${className} flex flex-col`}>
      <span
        className={`text-stone-400 text-left mr-1 block transition-transform duration-300 ${
          textShown && "text-sm -mb-1"
        }`}
      >
        {textShown ? title + ":" : title}
      </span>
      {textShown && <span className={`text-red-600 font-bold block`}>{text}</span>}
    </div>
  );
});

export default AppBadge;
