interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <div className="flex flex-1 flex-col gap-4 px-4 pb-2">{children}</div>;
};

export default DefaultLayout;
