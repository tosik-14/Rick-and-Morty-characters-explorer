import MainScreen from '../../pages/MainScreen/MainScreen';
import { useNavigation } from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation();
  return <MainScreen navigation={navigation} />;
}
