import { Redirect } from "expo-router";

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