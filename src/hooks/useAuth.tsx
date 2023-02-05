'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';

import { auth } from '../../firebase';

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const [initialLoading, setInitialLoading] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (userCredentials) => {
      if (userCredentials) {
        setUser(userCredentials);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(true);
        router.push('/login');
      }
      setInitialLoading(false);
    });
  }, [router]);

  const signUp = useCallback(
    async (email: string, password: string) => {
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          setUser(userCredentials.user);
          router.push('/');
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [router],
  );

  const signIn = useCallback(
    async (email: string, password: string) => {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          setUser(userCredentials.user);
          router.push('/');
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [router],
  );

  const logout = useCallback(async () => {
    setLoading(true);

    await signOut(auth)
      .then(() => {
        setUser(null);
        router.push('/login');
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);

  // useMemo is used to avoid unnecessary re-renders
  const memoizedValue = useMemo(
    () => ({
      user,
      loading,
      signUp,
      signIn,
      logout,
    }),
    [user, loading, signUp, signIn, logout],
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
