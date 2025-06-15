import CharacterPage from '../../pages/CharacterPage/CharacterPage';
import { useLocalSearchParams } from "expo-router";

export default function CharacterInfoPage() {
    const {id} = useLocalSearchParams();

    return <CharacterPage characterId={id}/>;
}