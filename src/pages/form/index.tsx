import PersonalDetails from "@/components/PersonalDetails";
import SalaryAndSuperannuation from "@/components/SalaryDetails";
import { FormProvider, useFormContext } from "@/state/FormContext";
import { FormStages } from "@/utils/constants";
import { calculateAnnualTax, calculateSuperannuation } from "@/utils/tax";
import {
  Badge,
  Button,
  Container,
  Progress,
  Spacer,
  Text,
  Tooltip,
} from "@nextui-org/react";
import { useCallback, useState } from "react";

export default function Form() {
  const [stage, setStage] = useState<FormStages>(FormStages.SUCCESS);
  const context = useFormContext();

  const onNextPress = useCallback(() => {
    if (stage === FormStages.PERSONAL_DETAILS) {
      setStage(FormStages.EMPLOYMENT_DETAILS);
    } else {
      setStage(FormStages.SUCCESS);
    }
  }, [stage]);

  return (
    <Container>
      <Spacer y={5} />
      <Text h2>Staff Onboarding Form</Text>
      <Spacer y={2} />
      <Progress
        color="primary"
        value={stage === FormStages.PERSONAL_DETAILS ? 50 : 100}
        shadow
      />
      <Spacer y={0.5} />
      <Badge enableShadow disableOutline color="primary">
        {stage}
      </Badge>
      <Spacer y={2} />
      {stage === FormStages.PERSONAL_DETAILS && (
        <PersonalDetails onPress={onNextPress} />
      )}
      {stage === FormStages.EMPLOYMENT_DETAILS && (
        <SalaryAndSuperannuation onPress={onNextPress} />
      )}
      {stage === FormStages.SUCCESS && (
        <>
          <Text h3>
            Thank you for submitting your details. You will receive an email
            with further instructions.
          </Text>
          <Spacer y={2} />
          <Text size="$lg">Salary: ${context.formState.annualSalary}</Text>
          <Text size="$lg">
            Tax File Number: {context.formState.taxFileNumber}
          </Text>
          <Text size="$lg">
            Tax to be deducted:{" "}
            ${calculateAnnualTax(context.formState.annualSalary).toFixed(2)}
          </Text>
          <Text size="$lg">
            Superannuation:{" "}
            ${calculateSuperannuation(context.formState.annualSalary).toFixed(2)}
          </Text>
        </>
      )}
    </Container>
  );
}
