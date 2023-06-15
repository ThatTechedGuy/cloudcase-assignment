import { useFormContext } from "@/state/FormContext";
import { Button, Grid, Input, Spacer } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FC } from "react";

interface FormState {
  annualSalary: number;
  taxFileNumber: string;
  bankAccountNumber: string;
  bsb: string;
  bankName: string;
  superannuationFundName?: string;
  superannuationAccountNumber?: string;
}

const schema = yup.object<FormState>({
  annualSalary: yup
    .number()
    .required("Annual Salary Amount is required")
    .positive("Annual Salary Amount must be a positive number"),
  taxFileNumber: yup.string().required("Tax File Number is required"),
  bankAccountNumber: yup.string().required("Bank Account Number is required"),
  bsb: yup.string().required("BSB is required"),
  bankName: yup.string().required("Bank Name & Branch is required"),
  superannuationFundName: yup.string().optional(),
  superannuationAccountNumber: yup.string().optional(),
});

const VERTICAL_SPACING = 2.5;

const SalaryAndSuperannuation: FC<{ onPress: () => void }> = ({ onPress }) => {
  const context = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: context.formState as FormState,
    // @ts-ignore
    // Reason: yupResolver is not typed
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormState) => {
    context.setFormState(data);
    onPress();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid.Container direction="column">
        {/* ...Existing code for Personal Details... */}
        <Input
          bordered
          placeholder="Annual Salary Amount"
          type="number"
          {...register("annualSalary")}
          {...(errors.annualSalary?.message && {
            helperColor: "error",
          })}
          helperText={errors.annualSalary?.message || ""}
          color={errors.annualSalary?.message ? "error" : "primary"}
        />
        <Spacer y={VERTICAL_SPACING} />
        <Input
          bordered
          labelPlaceholder="Tax File Number"
          placeholder="123-456-789"
          {...register("taxFileNumber")}
          {...(errors.taxFileNumber?.message && { helperColor: "error" })}
          helperText={errors.taxFileNumber?.message || ""}
          color={errors.taxFileNumber?.message ? "error" : "primary"}
        />
        <Spacer y={VERTICAL_SPACING} />
        <Input
          bordered
          labelPlaceholder="Bank Account Number"
          placeholder="12345678"
          {...register("bankAccountNumber")}
          {...(errors.bankAccountNumber?.message && { helperColor: "error" })}
          helperText={errors.bankAccountNumber?.message || ""}
          color={errors.bankAccountNumber?.message ? "error" : "primary"}
        />
        <Spacer y={VERTICAL_SPACING} />
        <Input
          bordered
          labelPlaceholder="BSB"
          placeholder="123456"
          {...register("bsb")}
          {...(errors.bsb?.message && { helperColor: "error" })}
          helperText={errors.bsb?.message || ""}
          color={errors.bsb?.message ? "error" : "primary"}
        />
        <Spacer y={VERTICAL_SPACING} />
        <Input
          bordered
          labelPlaceholder="Bank Name & Branch"
          placeholder="Example Bank, Branch Name"
          {...register("bankName")}
          {...(errors.bankName?.message && { helperColor: "error" })}
          helperText={errors.bankName?.message || ""}
          color={errors.bankName?.message ? "error" : "primary"}
        />
        <Spacer y={VERTICAL_SPACING} />
        <Input
          bordered
          labelPlaceholder="Superannuation Fund Name"
          placeholder="Super Fund Name"
          {...register("superannuationFundName")}
          {...(errors.superannuationFundName?.message && {
            helperColor: "error",
          })}
          helperText={errors.superannuationFundName?.message || ""}
          color={errors.superannuationFundName?.message ? "error" : "primary"}
        />
        <Spacer y={VERTICAL_SPACING} />
        <Input
          bordered
          labelPlaceholder="Superannuation Fund Account Number"
          placeholder="12345678"
          {...register("superannuationAccountNumber")}
          {...(errors.superannuationAccountNumber?.message && {
            helperColor: "error",
          })}
          helperText={errors.superannuationAccountNumber?.message || ""}
          color={
            errors.superannuationAccountNumber?.message ? "error" : "primary"
          }
        />
        <Spacer y={VERTICAL_SPACING} />
        <Button type="submit">Submit</Button>
      </Grid.Container>
    </form>
  );
};

export default SalaryAndSuperannuation;
