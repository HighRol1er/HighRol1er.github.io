import type { ExtraProps } from "react-markdown";

export type ComponentProps = React.ClassAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> &
  ExtraProps;
