import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (token: any) => {
    setError(null);
    setIsLoading(true);
    localStorage.setItem("user", JSON.stringify(token));
    dispatch({ type: "LOGIN", payload: token });
    setIsLoading(false);
  };

  return { login, error, isLoading };
};
