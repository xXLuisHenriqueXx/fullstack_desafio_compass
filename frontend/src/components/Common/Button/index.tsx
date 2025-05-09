import { ReactNode } from "react";
import { tv } from "tailwind-variants";

interface Props {
  flex?: "yes";
  padding?: "xs" | "sm";
  gap?: "xs" | "sm";
  border?: "primary" | "primary80" | "neutral";
  background?: "primary" | "neutral";
  text?:
    | "basePrimaryBold"
    | "basePrimaryMedium"
    | "smPrimaryMedium"
    | "baseNeutralBold"
    | "baseNeutralMedium";
  children: ReactNode;
  label: string;
  action?: () => void;
}

const button = tv({
  base: "px-7 rounded-full transition-all duration-300 cursor-pointer outline-none",
  variants: {
    flex: {
      yes: "flex flex-row items-center",
    },
    padding: {
      xs: "py-3",
      sm: "py-3.5",
    },
    gap: {
      xs: "gap-x-2",
      sm: "gap-x-2.5",
    },
    border: {
      primary: "border-2 border-primary hover:bg-primary",
      primary80: "border-2 border-primary-80 hover:bg-primary-80",
      neutral: "border-2 border-neutral hover:bg-neutral",
    },
    background: {
      primary: "bg-primary hover:bg-state-blue",
      neutral: "bg-neutral hover:bg-state-blue",
    },
    text: {
      basePrimaryBold: "text-base text-primary hover:text-neutral font-bold",
      basePrimaryMedium:
        "text-base text-primary hover:text-neutral font-medium",
      smPrimaryMedium: "text-sm text-primary hover:text-neutral font-medium",
      baseNeutralBold: "text-base text-neutral hover:text-primary font-bold",
      baseNeutralMedium:
        "text-base text-neutral hover:text-primary font-medium",
    },
  },
});

export default function Button({
  flex,
  padding,
  gap,
  border,
  background,
  text,
  children,
  label,
  action,
}: Props) {
  return (
    <button
      onClick={action}
      aria-label={label}
      className={button({
        flex: flex,
        padding: padding,
        gap: gap,
        border: border,
        background: background,
        text: text,
      })}
    >
      {children}
    </button>
  );
}
