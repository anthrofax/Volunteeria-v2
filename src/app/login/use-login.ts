import { useRouter } from "next/navigation";
import { useRoute } from "../contexts/route-context";
import { useMutation } from "@tanstack/react-query";
import { login } from "../utils/supabase/authApi";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function useLogin() {
  const { setIsLoggedIn } = useRoute();
  const router = useRouter();

  const { mutate: loginMutation, isPending: isDoingLogin } = useMutation({
    mutationFn: login,
    onSuccess: ({ successMessage }) => {
      setIsLoggedIn(true);
      toast.success(successMessage);

      router.push("/volunteers");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data: any) {
    loginMutation(data);
  }

  return {
    isDoingLogin,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}

export default useLogin;
