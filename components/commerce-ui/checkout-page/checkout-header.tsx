"use client";
import { useState } from "react";

interface CheckoutHeaderProps {
  step?: "cart" | "address" | "payment";
}

function CheckoutHeader({ step = "cart" }: CheckoutHeaderProps) {
  const [currentStep, setStep] = useState<"cart" | "address" | "payment">(step);

  return (
    <div className="container mx-auto py-4">
      <div className="flex w-full max-w-md mx-auto pb-8 items-center justify-between">
        <p
          className={`font-semibold text-green uppercase ${currentStep === "cart" ? "text-primary" : ""}`}
          onClick={() => setStep("cart")}
        >
          Cart
        </p>
        <div className="flex items-center justify-center space-x-1 mx-2">
          {[1, 2, 2, 3, 2, 2, 1].map((size, index) => (
            <div key={index} className={`w-${size} h-${size} bg-[#8EDDCB] rounded-full`} />
          ))}
        </div>
        <p
          className={`font-semibold text-green uppercase ${currentStep === "address" ? "text-primary" : ""}`}
          onClick={() => setStep("address")}
        >
          Address
        </p>
        <div className="flex items-center justify-center space-x-1 mx-2">
          {[1, 2, 2, 3, 2, 2, 1].map((size, index) => (
            <div key={index} className={`w-${size} h-${size} bg-[#8EDDCB] rounded-full`} />
          ))}
        </div>
        <p
          className={`font-semibold text-green uppercase ${currentStep === "payment" ? "text-primary" : ""}`}
          onClick={() => setStep("payment")}
        >
          Payment
        </p>
      </div>
    </div>
  );
}

export default CheckoutHeader;

