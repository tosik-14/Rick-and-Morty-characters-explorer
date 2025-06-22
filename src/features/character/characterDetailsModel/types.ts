import { characterStatusEnum } from "@/src/entities/character/characterStatusEnum";
import { characterGenderEnum } from "@/src/entities/character/characterGenderEnum";

export interface CharacterDetailsModel {
    id: number;
    name: string;
    status: characterStatusEnum;
    species: string;
    gender: characterGenderEnum;
    image: string;
}
