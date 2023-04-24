interface AppIconProps {
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: number;
  hasBg?: boolean;
  iconClass?: string;
  bgClass?: string;
  className?: string;
}

export default function AppIcon(props: AppIconProps) {
  const { Svg, size = 24, hasBg = true, iconClass = "stroke-red-800", bgClass = "bg-red-200", className = "" } = props;

  if (!hasBg) {
    return <Svg className={`relative h-${size} w-${size} stroke-[0.3] ${iconClass} ${className}`} />;
  }

  return (
    <div className={`relative h-${size} w-${size} pt-1 pl-1 ${className}`}>
      <div className={`z-0 absolute inset-0 rounded-full ${bgClass} `} />
      <Svg className={`z-1 relative h-${size} w-${size} stroke-[0.3] ${iconClass}`} />
    </div>
  );
}
