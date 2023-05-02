import cls from "./AppSpinner.module.css";

interface AppSpinnerProps {
  className?: string;
}

export default function AppSpinner({ className }: AppSpinnerProps) {
  return (
    <div className={`${cls.spinner} ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
