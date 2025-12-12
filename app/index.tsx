import { authenticateUser } from "@/src/redux/features/auth/auth-slice";
import { AppDispatch, RootState } from "@/src/redux/store";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { token, status } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(authenticateUser());
  }, []);

  
  if (status === "loading" || !token) {
    return null; 
  }

  return <Redirect href="/(tabs)/home" />;
}
