import { StackActions, useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  
  const navigateWithReset = async (route: string, params?: any) => {
    if (params) {
      const resetAction = StackActions.replace(route, params);
      navigation.dispatch(resetAction);
    } else {
      const resetAction = StackActions.replace(route);
      navigation.dispatch(resetAction);
    }
  }
  
  return {
    navigateWithReset,
  }
}
