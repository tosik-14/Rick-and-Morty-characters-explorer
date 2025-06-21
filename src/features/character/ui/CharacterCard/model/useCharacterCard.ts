import {Character} from "../../../../../entities/character/types";

interface CharacterCardProps {
    character: Character;
}

export default function useCharacterCard({ character } : CharacterCardProps){
    const {
        name,
        image,
        status,
        species,
        origin,
        location,
    } = character;

    return {
        name,
        image,
        status,
        species,
        origin,
        location,
    };
}