"use client";

import { useMemo } from "react";
import { ToolCard } from "@/components/tool-card";
import {
  toolsLanguages,
  toolsPricing,
  useToolsFilterParams,
} from "@/hooks/use-tools-filter-params";
import { tools } from "@/lib/tools";
import { ToolCategory } from "@/lib/types";

export function ToolsList({
  category = "all",
}: {
  category: ToolCategory | "all";
}) {
  const { filters, hasFilters } = useToolsFilterParams();

  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter((tool) => {
        const toolCategories = Array.isArray(tool.category)
          ? tool.category
          : [tool.category];

        return toolCategories.some(
          (cat) =>
            typeof cat === "string" &&
            cat.toLowerCase() === category.toLowerCase()
        );
      });
    }

    // Filter by search query
    if (filters.q && filters.q.trim()) {
      const query = filters.q.toLowerCase().trim();
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.shortDescription?.toLowerCase().includes(query) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by language
    // Only filter if not all languages are selected (default state shows all)
    const allLanguages = new Set(toolsLanguages.map((lang) => lang.value));
    const selectedLanguagesSet = new Set(filters.language);
    const isAllLanguagesSelected =
      allLanguages.size === selectedLanguagesSet.size &&
      [...allLanguages].every((lang) => selectedLanguagesSet.has(lang));

    if (!isAllLanguagesSelected && filters.language.length > 0) {
      const selectedLanguages = filters.language.map((lang) =>
        lang.toLowerCase()
      );

      filtered = filtered.filter((tool) => {
        // If tool has no languages, exclude it when filtering
        if (!tool.languages || tool.languages.length === 0) {
          return false;
        }

        // Check if tool matches any selected language
        return selectedLanguages.some((selectedLang) => {
          // Special case for JavaScript/TypeScript grouping
          if (selectedLang === "javascript/typescript") {
            return tool.languages?.some(
              (lang) =>
                lang.toLowerCase() === "javascript" ||
                lang.toLowerCase() === "typescript" ||
                lang.toLowerCase() === "js" ||
                lang.toLowerCase() === "ts"
            );
          }

          // Special case for multi-language support
          if (selectedLang === "multi-language") {
            return tool.languages?.some(
              (lang) =>
                lang.toLowerCase().includes("multi-language") ||
                lang.toLowerCase().includes("multi language") ||
                lang.toLowerCase().includes("multi-language support")
            );
          }

          // Special case for C# (csharp vs c#)
          if (selectedLang === "csharp") {
            return tool.languages?.some(
              (lang) =>
                lang.toLowerCase() === "c#" ||
                lang.toLowerCase() === "csharp" ||
                lang.toLowerCase() === "c sharp"
            );
          }

          // Normal case: exact match or contains
          return tool.languages?.some((lang) => {
            const langLower = lang.toLowerCase();
            return (
              langLower === selectedLang ||
              langLower.includes(selectedLang) ||
              selectedLang.includes(langLower)
            );
          });
        });
      });
    }

    // Filter by pricing
    // Only filter if not all pricing options are selected
    const allPricing = new Set(toolsPricing.map((p) => p.value));
    const selectedPricingSet = new Set(filters.pricing);
    const isAllPricingSelected =
      allPricing.size === selectedPricingSet.size &&
      [...allPricing].every((p) => selectedPricingSet.has(p));

    if (!isAllPricingSelected && filters.pricing.length > 0) {
      const selectedPricing = filters.pricing.map((p) => p.toLowerCase());
      filtered = filtered.filter((tool) => {
        // If tool has no pricing info, exclude it when filtering
        if (!tool.pricing || !tool.pricing.model) {
          return false;
        }
        const toolPricing = tool.pricing.model.toLowerCase();
        return selectedPricing.includes(toolPricing);
      });
    }

    // Sort alphabetically by name
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [category, filters]);

  if (hasFilters && filteredTools.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No tools found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredTools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
}
