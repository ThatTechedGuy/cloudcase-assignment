import { useFormContext } from "@/state/FormContext";
import { Button, Grid, Input, Spacer } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FC } from "react";

interface FormState {
  fullName: string;
  dateOfBirth?: Date;
  email: string;
  visaNumber?: string;
  passportNumber: string;
}

const schema = yup.object<FormState>({
  fullName: yup.string().required("Full Name is required"),
  dateOfBirth: yup
    .date()
    .max(new Date(), "Date of Birth must be in the past")
    .optional(),
  passportNumber: yup.string().required("Passport Number is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  visaNumber: yup.string().optional().min(6, "Invalid visa number"),
});

const VERTICAL_SPACING = 2.5;

const PersonalDetails: FC<{ onPress: () => void }> = ({ onPress }) => {
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
        <Input
          bordered
          clearable
          labelPlaceholder="Full Name"
          type="text"
          {...register("fullName")}
          {...(errors.fullName?.message && { helperColor: "error" })}
          helperText={errors.fullName?.message || ""}
          color={errors.fullName?.message ? "error" : "primary"}
        />
        <Spacer y={VERTICAL_SPACING} />
        <Input
          label="Date of Birth"
          type="date"
          {...register("dateOfBirth")}
          {...(errors.dateOfBirth?.message && { helperColor: "error" })}
          helperText={errors.dateOfBirth?.message || ""}
          color={errors.dateOfBirth?.message ? "error" : "primary"}
        />
        <Spacer y={VERTICAL_SPACING} />
        <Input
          bordered
          labelPlaceholder="Passport Number"
          placeholder="A1234567"
          {...register("passportNumber")}
          {...(errors.passportNumber?.message && { helperColor: "error" })}
          helperText={
            errors.passportNumber?.message || "As it appears on your passport"
          }
          color={errors.passportNumber?.message ? "error" : "primary"}
        />
        <Spacer y={VERTICAL_SPACING} />
        <Input
          bordered
          labelPlaceholder="Email"
          type="email"
          {...register("email")}
          {...(errors.email?.message && { helperColor: "error" })}
          helperText={
            errors.email?.message ||
            "IMPORTANT: We'll send your contract and payslips to this address"
          }
          color={errors.email?.message ? "error" : "primary"}
        />
        <Spacer y={VERTICAL_SPACING} />
        <Input
          bordered
          labelPlaceholder="VISA Number"
          placeholder="A1234567"
          clearable
          {...register("visaNumber")}
          {...(errors.visaNumber?.message && { helperColor: "error" })}
          helperText={
            errors.visaNumber?.message ||
            "The grant number on your IMMI Notification"
          }
          color={errors.visaNumber?.message ? "error" : "primary"}
        />
        <Spacer y={VERTICAL_SPACING} />
        <Button type="submit">Next</Button>
      </Grid.Container>
    </form>
  );
};

export default PersonalDetails;
