import React from "react";
import Image from "next/image";

interface SkipCardProps {
  option: {
    id: number;
    size: string;
    hirePeriod: string;
    price: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export const SkipCard: React.FC<SkipCardProps> = ({
  option,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`border rounded-lg cursor-pointer transition-all flex flex-col items-center justify-between w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] p-4 ${
        isSelected
          ? "border-blue-500 bg-gray-800 border-2"
          : "border-gray-700 hover:border-blue-300 bg-gray-900"
      }`}
      onClick={onSelect}
    >
      <div className="flex flex-col items-start justify-between w-full h-full p-4 rounded-lg">
        <div className="relative w-full">
          <span className="absolute top-2 right-2 text-sm font-bold bg-blue-500 text-white px-2 py-1 rounded-full z-10">
            {option.size} Yards
          </span>
          <Image
            className="rounded-lg mb-4 w-full"
            src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
            alt="Skip"
            width={300}
            height={150}
            priority
          />
        </div>
        <h2 className="text-lg font-bold text-center">
          {option.size} Yard Skip
        </h2>
        <p className="text-gray-400 text-center">
          {option.hirePeriod} day hire period
        </p>
        <p className="text-xl font-semibold text-blue-500 text-center">
          {option.price} <span className="text-sm text-gray-400">per week</span>
        </p>

        {isSelected ? (
          <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center w-full mt-4">
            Selected
          </div>
        ) : (
          <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 flex items-center justify-center w-full mt-4">
            Select This Skip <span className="ml-1">→</span>
          </button>
        )}
      </div>
    </div>
  );
};
