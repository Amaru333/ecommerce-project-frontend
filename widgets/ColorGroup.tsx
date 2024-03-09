import { ColorGroupProps } from "@/interfaces/widgetInterfaces";
import React from "react";

const ColorGroup = ({ colors }: ColorGroupProps) => {
  return (
    <div className="relative flex">
      {colors.map((color) => (
        <div key={color.name} className="w-4 h-4 rounded-full bg-gray-300 -mr-1.5 border shadow" style={{ backgroundColor: color.code }} />
      ))}
    </div>
  );
};

export default ColorGroup;
