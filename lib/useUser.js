import { useEffect, useState, useContext, createContext } from "react";
import { useRouter } from "next/router";
import { auth, db } from "./firebase";
import { removeUserCookie, setUserCookie, getUserFromCookie } from "./userCookies";
import { mapUserData } from "./mapUserData";
import registerUser from "../pages/api/auth/register";
//Context Provider
const authContext = createContext({ user: {} });
const { Provider } = authContext;

export function AuthProvider(props) {
  const auth = useUser();
  return <Provider value={auth}>{props.children}</Provider>;
}
export const useAuth = () => {
  return useContext(authContext);
};

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    const cancelAuthListener = auth.onIdTokenChanged((user) => {
      if (user) {
        const userData = mapUserData(user);
        setUserCookie(userData);
        setUser(userData);
      } else {
        removeUserCookie();
        setUser();
      }
    });
    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      // router.push("/login");
      return;
    }
    setUser(userFromCookie);
    return () => {
      cancelAuthListener();
    };
  }, []);

  const login = async ({ email, password }) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        router.push("/");
      })
      .catch((error) => console.log(error));
  };

  const logout = async () => {
    return auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        router.push("/login");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const signup = async ({ email, password, name }) => {
    await registerUser({ email, password, name });

    router.push("/login");
  };

  return { user, login, logout, signup };
};

export { useUser };
