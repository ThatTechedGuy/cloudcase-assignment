import { FormProvider } from "@/state/FormContext";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </NextUIProvider>
  );
}
