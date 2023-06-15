// pages/index.js

import Head from "next/head";
import { Button, Container, Spacer, Text } from "@nextui-org/react";
import styles from "../styles/home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/form");
  };

  return (
    <Container>
      <Spacer y={5} />
      <Head>
        <title>New Staff Member Onboarding</title>
        <meta
          name="description"
          content="Onboarding form for new staff members"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text h1>New Staff Member Onboarding</Text>
        <Spacer y={1} />
        <Text size="$4xl">
          Welcome to the Cloudcase team! Please complete the onboarding form to
          set up your payroll and HR systems.
        </Text>
        <Spacer y={2} />
        <Button size="lg" onClick={handleClick}>
          Complete Onboarding Form
        </Button>
        <Spacer y={2} />
        <Text size="$base">
          If you have any questions or need assistance, please contact our HR
          department at{" "}
          <a href="mailto: example@cloudcase.com">example@cloudcase.com</a>
        </Text>
      </main>
      <footer className={styles.footer}>
        <Text size="$base">
          &copy; {new Date().getFullYear()} Bank Inc. All rights reserved.
        </Text>
      </footer>
    </Container>
  );
}
