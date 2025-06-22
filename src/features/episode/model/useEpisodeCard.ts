import {useEffect, useState} from "react";
import {EpisodeCardModel} from "@/src/features/episode/episodeCardModel/types";
import {parseIdFromUrl} from "@/src/shared/lib/parseIdFromUrl";
import {getMultipleEpisodes} from "@/src/features/episode/api/getMultipleEpisodes";

interface EpisodeCardProps {
    episodeUrls: string[];
}

export default function useEpisodeCard ({episodeUrls} : EpisodeCardProps) {
    const [episodeDetails, setEpisodeDetails] = useState<EpisodeCardModel[]>([]);

    useEffect(() => {
        if (!episodeUrls || episodeUrls.length === 0) {
            setEpisodeDetails([]);
            return;
        }

        const load = async () => {

            const parsed = episodeUrls.map(url => (Number(parseIdFromUrl(url))))
                .filter((id) => !isNaN(id));

            if (parsed.length === 0) {
                setEpisodeDetails([]);
                return;
            }

            const episodesData = await getMultipleEpisodes(parsed);

            const episodeArray = Array.isArray(episodesData) ? episodesData : [episodesData];

            setEpisodeDetails(episodeArray);
        };

        load();
    }, [episodeUrls]);

    return {
        episodeDetails,
    };
}