import React from "react";

export interface UIButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
  children: React.ReactNode;
  className?: string;
}
