import { Menu } from "@/components/menu";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-4 md:pt-16 space-y-8">{children}</main>
    </div>
  );
}
