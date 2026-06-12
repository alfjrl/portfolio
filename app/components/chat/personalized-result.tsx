"use client";

import { FiRefreshCw } from "react-icons/fi";
import PersonalizedView from "app/components/chat/personalized-view";
import type { PersonalizeResponse } from "app/lib/personalize-types";

// Presentational result block — full-width chrome (matching "Selected Work") +
// the tailored content + footer. Shared by the live <PersonalizedSection /> and
// the design audit gallery. `onRefine` is optional so the gallery can render it
// without wiring up the live flow.
export default function PersonalizedResult({
  data,
  onRefine,
}: {
  data: PersonalizeResponse;
  onRefine?: () => void;
}) {
  return (
    <div className="w-full bg-[#fafcfd] border-t border-gray-200">
      <div
        aria-label="Tailored for you"
        className="p-4 md:py-16 max-w-[1280px] w-full md:mx-auto border-x border-gray-200"
      >
        <h2 className="text-2xl md:text-3xl text-gray-900 font-black mb-2 animate-blur-in">
          Tailored for you
        </h2>
        <p className="text-gray-500 mb-8 md:mb-12 animate-blur-in">
          A quick read on how I work, plus three case studies picked for what you
          told me.
        </p>

        <PersonalizedView data={data} />

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-200 pt-6">
          {onRefine && (
            <button
              type="button"
              onClick={onRefine}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors"
            >
              <FiRefreshCw size={15} />
              Refine these picks
            </button>
          )}
          <span className="text-sm text-gray-400">
            Want to talk it through? Reach me at{" "}
            <a
              href="mailto:alfred.jr.lin@gmail.com"
              className="font-semibold text-gray-600 underline underline-offset-2 hover:text-black"
            >
              alfred.jr.lin@gmail.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
