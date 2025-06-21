import CharacterList from '../../pages/CharacterList/CharacterList';
import { useNavigation } from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation();
  return <CharacterList navigation={navigation} />;
}
