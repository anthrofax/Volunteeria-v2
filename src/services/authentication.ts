import supabase from "./supabase";

export default async function authenticate(previousState: any, loginData: any) {
   const email =  loginData.get('email');
   const password =  loginData.get('password');

  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  return { data, error };
}
