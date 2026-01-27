import { SidebarTrigger } from "@/components/ui/sidebar";

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const Header = ({ title, children }: HeaderProps) => {
  return (
    <header className="flex h-16 shrink-0 justify-between items-center sticky top-0 bg-background/50 backdrop-blur-sm z-10">
      <SidebarTrigger className="-ml-1" />
      <div className="flex-1">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      {children}
    </header>
  );
};

export default Header;
