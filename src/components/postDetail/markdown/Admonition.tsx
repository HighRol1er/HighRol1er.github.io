import type { ReactNode } from "react";
import {
  Info,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb,
} from "lucide-react";

type AdmonitionType = "info" | "warning" | "success" | "error" | "tip";

interface AdmonitionProps {
  type: AdmonitionType;
  children: ReactNode;
}

const typeConfig: Record<
  AdmonitionType,
  {
    icon: React.ComponentType<{ className?: string }>;
    borderColor: string;
    iconColor: string;
  }
> = {
  info: {
    icon: Info,
    borderColor: "border-blue-500",
    iconColor: "text-blue-500",
  },
  warning: {
    icon: AlertTriangle,
    borderColor: "border-yellow-500",
    iconColor: "text-yellow-500",
  },
  success: {
    icon: CheckCircle,
    borderColor: "border-green-500",
    iconColor: "text-green-500",
  },
  error: {
    icon: XCircle,
    borderColor: "border-red-500",
    iconColor: "text-red-500",
  },
  tip: {
    icon: Lightbulb,
    borderColor: "border-purple-500",
    iconColor: "text-purple-500",
  },
};

export const Admonition = ({ type, children }: AdmonitionProps) => {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`${config.borderColor} border rounded-lg p-4 my-4 bg-background flex gap-3`}
    >
      <div className={`${config.iconColor} shrink-0 mt-0.5`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 text-foreground [&>p]:mb-0">{children}</div>
    </div>
  );
};
