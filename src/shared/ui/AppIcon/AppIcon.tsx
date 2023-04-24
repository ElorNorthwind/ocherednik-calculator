interface AppIconProps {
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  hasBg?: boolean;
  size?: number;
  iconClass?: string;
  bgClass?: string;
  className?: string;
}

export default function AppIcon(props: AppIconProps) {
  const { Svg, hasBg = true, size = 24, iconClass = "stroke-red-800", bgClass = "bg-red-200", className = "" } = props;

  if (!hasBg) {
    return <Svg className={`relative h-${size} w-${size} stroke-[0.3] ${iconClass} ${className}`} />;
  }

  return (
    <div className={`relative h-${size} w-${size} pt-1 pl-1 ${className}`}>
      <div className={`z-0 absolute inset-1 rounded-full ${bgClass} `} />
      <Svg className={`z-1 relative h-full w-full stroke-[0.3] ${iconClass}`} />
    </div>
  );
}
