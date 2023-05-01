import cls from "./AppSpinner.module.css";

export default function AppSpinner() {
  return (
    <div className={cls.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
