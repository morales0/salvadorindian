import React from "react";
import Image, { StaticImageData } from "next/image";

interface RecipeCardProps {
  name: string;
  type: string;
  tags: string[];
  image: StaticImageData;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ name, type, tags, image }) => {
  return (
    <div className="relative">
      <div className="relative">
        <Image src={image} alt={name} objectFit="cover" width={300} />
        <div className="grid place-items-center absolute top-0 left-0 w-full py-1 text-center  text-white bg-emerald-700 font-bold text-lg">
          {name}
        </div>
      </div>

      <div className="flex justify-between py-3">
        <span className="font-light lowercase">{type}</span>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <div
              key={tag}
              className="grid place-items-center px-2 rounded-full border border-emerald-800 text-xs bg-emerald-100 bg-opacity-30"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
