import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

// const supabase = createClient(supabase_url, anon_key);

// const { data, error } = await supabase.auth.signUp({
//   email: "example@email.com",
//   password: "example-password",
//   code: "ABCDEFG",
// });

const Register = () => {
  const [token, setToken] = useState();
  return <div>Register</div>;
};

export default Register;
