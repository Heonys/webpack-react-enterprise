/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { GoogleUserType, GoogleProfileType } from "@/types/google";

type Props = {
  children: React.ReactNode;
};

type AuthType = {
  user: GoogleUserType | null;
  login: () => void;
  logout: () => void;
  profile: GoogleProfileType | undefined;
};

const AuthContext = createContext<AuthType | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<GoogleProfileType>();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const logout = () => {
    googleLogout();
    setUser(null);
    setProfile(undefined);
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, profile, login, logout }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext)!;
};
