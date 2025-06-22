import CharacterDetailView from '@/src/pages/CharacterDetailView/CharacterDetailView';
import { useLocalSearchParams } from "expo-router";
import { useNavigation } from '@react-navigation/native';

export default function CharacterInfoPage() {
    const {id} = useLocalSearchParams();
    const navigation = useNavigation();

    return <CharacterDetailView characterId={id as string} navigation={navigation} />;
}