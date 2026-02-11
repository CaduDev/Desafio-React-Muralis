import React, { createContext, useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { FadeLoader } from "react-spinners";

import { useTheme } from "styled-components";

import { TOKEN, USER } from "@/keys";

import type { DashboardUserProps } from "@/@types/user";

import { fakeApi } from "@/service/api";

import { Container } from "./styles";


export interface AuthContextData {
  signed: boolean;
  user: DashboardUserProps;
  auth(email: string, password: string): Promise<void>;
  signOut: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({ } as AuthContextData);

export const AuthProvider: React.FC <{children: React.ReactNode}>= ({ children }) => {
  const { COLORS } = useTheme();

  const location = useLocation();

  const [user, setUser] = useState<DashboardUserProps | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageDate() {
      const storageUser = localStorage.getItem(USER);

      if(storageUser) {
        setUser(JSON.parse(storageUser));
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

    loadStorageDate();
  }, [])

  async function auth(email: string, password: string) {
    try {
      setIsLoading(true);

      const { data } = await fakeApi.post("session", { email, password }) as { data: { token: string, user: any } };
      
      const { token, user } = data;

      setIsLoading(false);
      
      setUser(user);

      localStorage.setItem(USER, JSON.stringify(user));
      localStorage.setItem(TOKEN, token);
    } catch(err) {

    }
  }

  async function signOut() {
    localStorage.removeItem(USER);
    localStorage.removeItem(TOKEN);

    setUser(null);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  if(isLoading && location.pathname === '/' && !!user) {
    return (
      <Container>
        <FadeLoader
          color={COLORS.TEXT}
          width={2}
          nonce="loading"
          speedMultiplier={3}
        />
      </Container>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user?.id,
        user: user as DashboardUserProps,
        auth,
        signOut,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;