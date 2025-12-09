import { Redirect } from "expo-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "@/src/redux/features/auth/auth-slice";
import { AppDispatch, RootState } from "@/src/redux/store";

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { token, status } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(authenticateUser());
  }, []);

  // While token is loading, don't redirect yet
  if (status === "loading" || !token) {
    return null; // you can show a spinner here if you want
  }

  return <Redirect href="/(tabs)/home" />;
}
