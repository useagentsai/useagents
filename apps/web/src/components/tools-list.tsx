"use client";

import { useMemo, useState } from "react";
import { ToolCard } from "@/components/tool-card";
import { tools } from "@/lib/tools";
import { ToolCategory } from "@/lib/types";
import { Input } from "./ui/input";

export function ToolsList({
  category = "all",
}: {
  category: ToolCategory | "all";
}) {
  const [selectedCategory, setSelectedCategory] = useState<
    ToolCategory | "all"
  >(category);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = useMemo(() => {
    let filtered = tools;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((tool) =>
        Array.isArray(tool.category)
          ? tool.category.some(
              (cat) =>
                typeof cat === "string" &&
                cat.toLowerCase() === selectedCategory.toLowerCase()
            )
          : typeof tool.category === "string" &&
            tool.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.category.some((tag) => tag.toLowerCase().includes(query)) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort alphabetically by name
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Filters and Search */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex-1 w-full">
            <Input
              className={"max-w-xl"}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, description, category, tag or provider..."
              size={"lg"}
              type="text"
              value={searchQuery}
            />
          </div>
        </div>
      </div>

      {/* Tools Grid/List */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No tools found matching your criteria.
          </p>
        </div>
      )}
    </>
  );
}
