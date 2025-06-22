import { characterStatusEnum } from "@/src/entities/character/characterStatusEnum";
import { characterGenderEnum } from "@/src/entities/character/characterGenderEnum";

export interface Character {
    id: number;
    name: string;
    status: characterStatusEnum;
    species: string;
    type: string;
    gender: characterGenderEnum;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}
