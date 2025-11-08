import { Suspense } from "react";
import { ToolLanguagesFilter } from "./tool-languages-filter";
import { ToolPricingFilter } from "./tool-pricing-filter";
import { ToolSearchInputFilter } from "./tool-search-input-filter";

export function ToolFilters() {
  return (
    <div className="flex lg:flex-row flex-wrap gap-3 items-center">
      <Suspense>
        <ToolSearchInputFilter />
        <ToolLanguagesFilter />
        <ToolPricingFilter />
      </Suspense>
    </div>
  );
}
