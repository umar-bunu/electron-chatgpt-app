import MuiProvider from "./Providers/MuiProvider";

export default function MainController({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MuiProvider>{children}</MuiProvider>;
}
