import {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
  useCallback,
} from "react";

// Define the form state interface
export interface FormState {
  fullName: string;
  dateOfBirth?: Date;
  email: string;
  phone: string;
  visaNumber?: string;
  passportNumber: string;
  startDate: string;
  annualSalary: number;
  taxFileNumber: string;
  bankAccountNumber: string;
  bsb: string;
  bankName: string;
  superannuationFundName?: string;
  superannuationAccountNumber?: string;
}

const INITIAL_FORM_STATE: FormState = {
  fullName: "",
  dateOfBirth: undefined,
  email: "",
  phone: "",
  visaNumber: undefined,
  passportNumber: "",
  startDate: "",
  annualSalary: 70000,
  taxFileNumber: "",
  bankAccountNumber: "",
  bsb: "",
  bankName: "",
  superannuationFundName: "",
  superannuationAccountNumber: "",
};

// Define the form state update function type
type FormStateUpdater = (newState: Partial<FormState>) => void;

// Create a new context for the form state
interface FormContextProps {
  formState: FormState;
  setFormState: FormStateUpdater;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

// Create a custom hook to access the form state and update function
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

// Create a provider component to wrap the app and provide the form state
export const FormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);

  // Function to update the form state
  const updateFormState: FormStateUpdater = useCallback((newState) => {
    setFormState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  }, []);

  return (
    <FormContext.Provider value={{ formState, setFormState: updateFormState }}>
      {/* Render the form fields and input elements */}
      {children}
    </FormContext.Provider>
  );
};
