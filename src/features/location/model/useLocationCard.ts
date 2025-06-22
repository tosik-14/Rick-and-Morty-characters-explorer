import {useEffect, useState} from "react";
import {LocationCardModel} from "@/src/features/location/locationCardModel/types";
import {getMultipleLocations} from "@/src/features/location/api/getMultipleLocations";
import {NamedLocationUrl} from "@/src/entities/location/NamedLocationModel/types";
import {LocationLabelEnum} from "@/src/entities/location/NamedLocationModel/LocationLabelEnum";
import {parseIdFromUrl} from "@/src/shared/lib/parseIdFromUrl";

export default function useLocationCard(locations: NamedLocationUrl[]) {
    const [originLocation, setOriginLocation] = useState<LocationCardModel | null>(null);
    const [lastSeenLocation, setLastSeenLocation] = useState<LocationCardModel | null>(null);



    useEffect(() => {
        if (!locations || locations.length === 0) {
            setOriginLocation(null);
            setLastSeenLocation(null);
            return;
        }

        const load = async () => {

            const parsed = locations.map(loc => ({
                id: Number(parseIdFromUrl(loc.url)),
                label: loc.label,
            })).filter(loc => !!loc.id);

            if (parsed.length === 0) {
                setOriginLocation(null);
                setLastSeenLocation(null);
                return;
            }

            const ids = parsed.map(loc => loc.id);
            const locationsData = await getMultipleLocations(ids);




            const locationArray = Array.isArray(locationsData) ? locationsData : [locationsData];

            for (const loc of parsed) {

                const fullData = locationArray.find((l: any) => l.id === loc.id);
                if (!fullData) continue;



                if (loc.label === LocationLabelEnum.Origin) {
                    setOriginLocation(fullData);
                } else if (loc.label === LocationLabelEnum.LastSeen) {
                    setLastSeenLocation(fullData);
                }
            }
        };

        load();
    }, [locations]);

    return {
        originLocation,
        lastSeenLocation,
    };


}