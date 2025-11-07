import {
  parseAsArrayOf,
  parseAsString,
  parseAsStringLiteral,
  useQueryStates,
} from "nuqs";

export const toolsLanguages = [
  {
    label: "JavaScript/TypeScript",
    value: "javascript/typescript",
  },
  {
    label: "Python",
    value: "python",
  },
  {
    label: "Go",
    value: "go",
  },
  {
    label: "Java",
    value: "java",
  },
  {
    label: "SQL",
    value: "sql",
  },
  {
    label: "Rust",
    value: "rust",
  },
  {
    label: "C++",
    value: "c++",
  },
  {
    label: "Dart",
    value: "dart",
  },
  {
    label: "Multi-language support",
    value: "multi-language",
  },
  {
    label: "Swift",
    value: "swift",
  },
  {
    label: "Kotlin",
    value: "kotlin",
  },
  {
    label: "C#",
    value: "csharp",
  },
  {
    label: "R",
    value: "r",
  },
  {
    label: "Scala",
    value: "scala",
  },
  {
    label: "Ruby",
    value: "ruby",
  },
  {
    label: "PHP",
    value: "php",
  },
] as const;

export const toolsPricing = [
  {
    label: "Paid",
    value: "paid",
  },
  {
    label: "Freemium",
    value: "freemium",
  },
  {
    label: "Open Source",
    value: "open-source",
  },
] as const;

const languages = toolsLanguages.map((lang) => lang.value);
const pricing = toolsPricing.map((pricing) => pricing.value);

const toolParsers = {
  q: parseAsString,
  language: parseAsArrayOf(parseAsStringLiteral(languages)).withDefault(
    languages
  ),
  pricing: parseAsArrayOf(parseAsStringLiteral(pricing)).withDefault(pricing),
};

export function useToolsFilterParams() {
  const [filters, setFilters] = useQueryStates(toolParsers);

  return {
    filters,
    setFilters,
  };
}
