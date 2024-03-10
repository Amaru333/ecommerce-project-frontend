export interface SignupFormProps {
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface LoginFormProps {
  closeModal: () => void;
}
