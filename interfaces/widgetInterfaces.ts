import React from "react";

export interface UIButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
  children: React.ReactNode;
  className?: string;
}

export interface ColorGroupProps {
  colors: {
    name: string;
    code: string;
  }[];
}

export interface RatingStarsProps {
  rating: number;
}

export interface UIModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export interface OutsideListenerComponentProps {
  callback: () => void;
  children: React.ReactNode;
}

export interface FormInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  id: string;
}
