"use client";

import { signup } from "@/app/utils/supabase/authApi";
import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignupContext = createContext({} as any);

function SignupProvider({ children }: { children: React.ReactNode }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const isUserConfirm = useRef(false);
  const form = useRef(null);

  const { register, handleSubmit, getValues, formState, reset } = useForm();

  const { mutate: signUpMutation, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: ({ successMessage }) => {
      toast.success(successMessage);

      reset();
    },
    onError: (error) => {
      toast.error(error.message);

      reset();
    },
  });

  function onSubmit(data: any) {
    signUpMutation({ ...data });
  }

  function onError(errors: any) {
    console.log(errors);
  }

  const { errors } = formState;

  return (
    <SignupContext.Provider
      value={{
        showConfirm,
        onShowConfirm: setShowConfirm,
        isUserConfirm,
        register,
        handleSubmit,
        getValues,
        onSubmit,
        errors,
        form,
        onError,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}

function useSignupContext() {
  const context = useContext(SignupContext);

  if (!context) alert("Anda mengakses context di luar jangkauan");

  return context;
}

export { SignupProvider, useSignupContext };
