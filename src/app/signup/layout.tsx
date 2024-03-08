import { SignupProvider } from "@/app/contexts/SignupContext";

function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SignupProvider>{children}</SignupProvider>;
}

export default SignupLayout;
