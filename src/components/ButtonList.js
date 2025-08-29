import React from "react";
import Button from "./Button";

const buttonNames = [
  "All",
  "Gaming",
  "Songs",
  "News",
  "Football",
  "Cricket",
  "Trending",
  "Live",
  "Movies",
  "Fashion",
  "Podcasts",
  "Technology",
  "Cooking",
  "Travel",
  "Sports",
  "Mixes",
  "Recently uploaded",
];

const ButtonList = () => {
  return (
    // Outer: handles scrolling
    <div className="w-full overflow-x-auto no-scrollbar scroll-smooth py-2">
      {/* Inner: grows to content width so it *must* overflow */}
      <div className="inline-flex gap-2 snap-x snap-mandatory px-4">
        {buttonNames.map((each) => (
          <div key={each} className="shrink-0 snap-start">
            <Button name={each} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
