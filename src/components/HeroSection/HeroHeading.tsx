import React from "react";

function HeroHeading() {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl lg:leading-snug">
        Your marketplace for high-quality{" "}
        <span className="text-blue-600" data-testid="hero-heading-span">
          digital assets
        </span>
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">
        Welcome to DigitalHip. Every asset on our platform is verified by our
        team to ensure our highest quality standards
      </p>
    </div>
  );
}

export default HeroHeading;
