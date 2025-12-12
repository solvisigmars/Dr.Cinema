import { RootState } from "@/src/redux/store";
import { useSelector } from "react-redux";

import AuthStartScreen from "@/src/views/auth/auth-start-screen";
import ProfileScreen from "@/src/views/profile-screen/profile-screen";

export default function ProfileRoute() {
  const { user } = useSelector((state: RootState) => state.auth);



  if (!user) {
    return <AuthStartScreen />;  
  }

  return <ProfileScreen />;     
}
