import type { Metadata } from "next";
import { Menu } from "@/components/menu";
import { ToolsList } from "@/components/tools-list";
import { getAllCategories, getToolBySlug } from "@/lib/tools";
import { ToolCategory } from "@/lib/types";

interface ToolPageProps {
  params: Promise<{ slug: ToolCategory }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  // For now, we'll generate static params for known tools
  // In production, you'd fetch all tool slugs
  const tools = [
    "langchain",
    "pinecone",
    "vercel-ai-sdk",
    "openai",
    "anthropic-claude",
    "qdrant",
    "weaviate",
    "llamaindex",
    "chroma",
    "supabase-vectors",
  ];

  return tools.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: `${tool.name}`,
    description: tool.shortDescription || tool.description,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;

  return <ToolsList category={slug} />;
}
