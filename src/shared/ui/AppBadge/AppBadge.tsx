import { memo } from "react";

interface AppBadgeProps {
  className?: string;
  title?: string;
  text?: string;
}

const AppBadge = memo((props: AppBadgeProps) => {
  const { className, title = "", text = "" } = props;

  if (text === "") {
    return (
      <div className={`${className} flex flex-col`}>
        <span className={`text-stone-400 text-left mr-1 block`}>{title}</span>
      </div>
    );
  }

  return (
    <div className={`${className} flex flex-col`}>
      <span className={`text-stone-400 text-left mr-1 block text-sm -mb-1`}>{title}:</span>
      <span className={`text-red-600 font-bold block`}>{text}</span>
    </div>
  );
});

export default AppBadge;
