import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaTrashAlt,
  FaTruck,
  FaShieldAlt,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";

interface BreadcrumbProps {
  steps: string[];
  currentStep: number;
}

const icons = [
  <FaMapMarkerAlt key="map-marker" />,
  <FaTrashAlt key="trash" />,
  <FaTruck key="truck" />,
  <FaShieldAlt key="shield" />,
  <FaCalendarAlt key="calendar" />,
  <FaCreditCard key="credit-card" />,
];

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  steps,
  currentStep,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center gap-6 text-lg">
      {steps.map((step, index) => {
        if (isMobile && index > currentStep + 1) return null;

        return (
          <React.Fragment key={step}>
            {index > 0 && (
              <span
                className={`text-gray-400 border ${
                  isMobile ? "w-[1rem]" : "w-[2rem]"
                }`}
              ></span>
            )}
            <div className="flex items-center gap-3">
              <span
                className={`${
                  index <= currentStep ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {icons[index]}
              </span>
              <span
                className={`${
                  index <= currentStep ? "text-white-600" : "text-gray-500"
                } ${isMobile ? "hidden sm:inline" : ""}`}
              >
                {step}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
