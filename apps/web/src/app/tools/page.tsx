import type { Metadata } from "next";
import { Menu } from "@/components/menu";
import { ToolsList } from "@/components/tools-list";

export const metadata: Metadata = {
  title: "Tools",
};

export default function ToolsPage() {
  return <ToolsList category="all" />;
}
