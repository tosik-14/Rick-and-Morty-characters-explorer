import CharacterPage from '../../pages/CharacterPage/CharacterPage';
import { useLocalSearchParams } from "expo-router";
import { useNavigation } from '@react-navigation/native';

export default function CharacterInfoPage() {
    const {id} = useLocalSearchParams();
    const navigation = useNavigation();

    return <CharacterPage characterId={id as string} navigation={navigation} />;
}