import { useRoute } from "@/contexts/RouteContext";
import { login } from "@/utils/supabase/authApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

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

  return { loginMutation,  isDoingLogin };
}

export default useLogin;
