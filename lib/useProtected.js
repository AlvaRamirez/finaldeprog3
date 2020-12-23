import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './useUser';
import { getUserFromCookie } from "./userCookies";

export const useProtected = () => {
    const auth = useAuth();
    const router = useRouter();
    useEffect(() => {
        const userFromCookie = getUserFromCookie();
console.log(userFromCookie)
        if (!userFromCookie) {
             router.push("/login");
            return;
        }
    }, []);

    return auth;
};