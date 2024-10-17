import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import { SignUpCard } from "@/features/auth/components/sign-up-card";

const SingUpPage = async () => {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SignUpCard />;
};

export default SingUpPage;
