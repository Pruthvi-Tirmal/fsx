import { useSession } from "next-auth/react";

/**
 * This hook will return user session which contains user details like email,profile image, name etc.
 * @returns user session
 */
const useUserSession = () => {
  const { data: session } = useSession();
  return session?.user;
};

export default useUserSession;
