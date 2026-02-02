import type { LucideIcon } from "lucide-react";
import type { ElementType, ComponentPropsWithoutRef } from "react";

type IconMapperProps<T extends ElementType> = {
  Icon: LucideIcon | ElementType;
  label: string;
  element?: T;
} & ComponentPropsWithoutRef<T>;

export const IconMapper = <T extends ElementType = "div">({
  Icon,
  label,
  element,
  ...props
}: IconMapperProps<T>) => {
  const Element = element || ("div" as ElementType);

  const isLink = element === "a";

  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 shrink-0" />
      <Element
        {...props}
        className={`${isLink ? "hover:underline cursor-pointer" : ""}`}
      >
        {label}
      </Element>
    </div>
  );
};
