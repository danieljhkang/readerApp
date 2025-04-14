import { createContext, useContext, useEffect, useState } from "react";
import { Session as SupabaseSession, AuthError } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";

// Define more specific types
interface AuthContextType {
  signUpNewUser: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; data?: any; error?: AuthError | string }>;
  signInUser: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    data?: SupabaseSession | null;
    error?: AuthError | string;
  }>;
  session: SupabaseSession | null | undefined;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<SupabaseSession | null | undefined>(
    undefined
  );

  // Sign up
  const signUpNewUser = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; data?: any; error?: AuthError | string }> => {
    const { data, error } = await supabase.auth.signUp({
      email: email.toLowerCase(),
      password: password,
    });

    if (error) {
      console.error("Error signing up: ", error);
      return { success: false, error };
    }

    return { success: true, data };
  };

  // Sign in
  const signInUser = async (
    email: string,
    password: string
  ): Promise<{
    success: boolean;
    data?: SupabaseSession | null;
    error?: AuthError | string;
  }> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(),
        password: password,
      });

      // Handle Supabase error explicitly
      if (error) {
        console.error("Sign-in error:", error.message); // Log the error for debugging
        return { success: false, error: error.message }; // Return the error
      }

      // If no error, return success
      console.log("Sign-in success:", data);
      return { success: true, data: data.session }; // Return the session data
    } catch (err: any) {
      // Handle unexpected issues with proper typing
      console.error("Unexpected error during sign-in:", err.message);
      return {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      };
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // Sign out
  async function signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ signUpNewUser, signInUser, session, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within an AuthContextProvider");
  }
  return context;
};
