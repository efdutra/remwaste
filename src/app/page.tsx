"use client";

import React, { useState, useEffect } from "react";
import { SkipCard } from "@/components/SkipCard";
import { fetchSkipsByLocation } from "@/services/api";
import { Skip } from "@/types/skip";
import { Breadcrumb } from "@/components/Breadcrumb";

const App: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        setLoading(true);
        const data = await fetchSkipsByLocation("NR32", "Lowestoft");
        setSkips(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    loadSkips();
  }, []);

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip(skip);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      console.log("Proceeding with:", selectedSkip);
    }
  };

  return (
    <div className="grid grid-rows-[1fr_auto] items-center justify-items-center min-h-screen p-4 pb-12 gap-4 sm:gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 sm:gap-[32px] row-start-1 items-center justify-center px-4">
        <Breadcrumb
          steps={[
            "Postcode",
            "Waste Type",
            "Select Skip",
            "Permit Check",
            "Choose Date",
            "Payment",
          ]}
          currentStep={2}
        />
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Choose Your Skip Size
          </h1>
          <h2 className="text-base sm:text-lg text-gray-400">
            Select the skip size that best suits your needs
          </h2>
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-sm sm:text-base">Loading Skips...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-red-600 mb-2">
              Error loading skips
            </h2>
            <p className="text-sm sm:text-base mb-4">{error}</p>
            <button
              className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 mb-20">
            {skips.map((skip) => (
              <SkipCard
                key={skip.id}
                option={{
                  id: skip.id,
                  size: skip.size.toString(),
                  hirePeriod: `${skip.hire_period_days}`,
                  price: `£ ${skip.price_before_vat}`,
                }}
                isSelected={selectedSkip?.id === skip.id}
                onSelect={() => handleSelectSkip(skip)}
              />
            ))}
          </div>
        )}
      </main>
      {selectedSkip && (
        <footer className="fixed bottom-0 left-0 w-full bg-black text-white p-3 sm:p-4 flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-4 z-30">
          <div className="flex items-center gap-4">
            <span className="text-base sm:text-lg font-bold">
              {selectedSkip?.size || "Select a skip"}
            </span>
            {selectedSkip && (
              <>
                <span className="text-sm sm:text-gray-400">
                  {selectedSkip.hire_period_days} day hire
                </span>
                <span className="text-blue-500 font-bold">
                  £ {selectedSkip.price_before_vat}
                </span>
              </>
            )}
          </div>
          <div className="flex gap-2 sm:gap-4">
            <button
              className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              onClick={() => setSelectedSkip(null)}
            >
              Back
            </button>
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 ${
                selectedSkip
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-600 cursor-not-allowed"
              } text-white rounded`}
              onClick={handleContinue}
              disabled={!selectedSkip}
            >
              Continue →
            </button>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
