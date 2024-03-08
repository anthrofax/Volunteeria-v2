import { SignupProvider } from "@/app/contexts/signup-context";

function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SignupProvider>{children}</SignupProvider>;
}

export default SignupLayout;
