import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ToolCard } from "@/components/tool-card";
import { siteConfig } from "@/config/site";
import { getAllCategories, getToolsByCategory } from "@/lib/tools";
import { ToolCategory } from "@/lib/types";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category} Tools - ${siteConfig.name}`,
    description: `Browse all ${category} tools on ${siteConfig.name}`,
  };
}

function findCategoryBySlug(slug: string): ToolCategory | null {
  const categories = getAllCategories();
  const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-");

  for (const category of categories) {
    const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
    if (categorySlug === normalizedSlug) {
      return category;
    }
  }

  return null;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = findCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const tools = getToolsByCategory(category);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 pt-24">
      <Link
        className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block transition-colors"
        href="/tools"
      >
        ← Back to Tools
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          {category} Tools
        </h1>
        <p className="text-muted-foreground text-lg">
          {tools.length} {tools.length === 1 ? "tool" : "tools"} in this
          category
        </p>
      </div>

      {tools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} variant="grid" />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No tools found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
