import {useEffect, useState} from 'react';
import {getCharacters} from '@/src/features/character/api/getCharacters';
import {getFilteredCharacters} from '@/src/features/character/api/getFilteredCharacters';
import {Character} from '@/src/entities/character';
import {loadOfflineCharacters} from '@/src/services/offlineCharacters/loadOfflineCharacters';
import {useInternet} from "@/src/app-providers/CheckInternerProvider/CheckInternetProvider";
import {showSimpleAlert} from "@/src/shared/ui/showSimpleAlert/showSimpleAlert";
import {checkInternetConnection} from "@/src/app-providers/CheckInternerProvider/utils/checkInetConnection";
import {AlertMessagesEnum} from "@/src/shared/ui/showSimpleAlert/constants/alertMessagesEnum";

export function useCharacterList() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [isNextPage, setIsNextPage] = useState(true);
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { isConnected } = useInternet();

    const [filters, setFilters] = useState<{ status: string, species: string }>({
        status: '',
        species: ''
    });

    const setFilter = (key: 'status' | 'species', value: string) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };


    useEffect(() => {
        //if (isConnected === undefined) return;
        reset();
        loadCharacters(1);

    }, [filters.status, filters.species]);

    const loadCharacters = async (pageToLoad: number) => {
        if (loading || !isNextPage) return;

        setLoading(true);

        try {
            const isInternet = await checkInternetConnection();
            if (!isInternet) {
                const cached = await loadOfflineCharacters();
                if (cached && cached.length > 0) {
                    setCharacters(cached);
                    setIsNextPage(false);
                } else {
                    setError('No internet connection');
                }
                return;
            }

            const filteredParams = Object.entries(filters)
                .reduce((acc, [key, value]) => {
                    if (value.trim() !== '') {
                        acc[key] = value;
                    }
                    return acc;
                }, {} as Record<string, string>);

            const isEmptyFilters = Object.keys(filteredParams).length === 0;

            const data = isEmptyFilters ? await getCharacters(pageToLoad) : await getFilteredCharacters(pageToLoad, filteredParams);

            if(page === 1) {
                setCharacters(data.results);
            } else{
                setCharacters((prev) => [...prev, ...data.results]);
            }


            setIsNextPage(!!data.info.next);
            setPage(pageToLoad + 1);

        } catch (err: any) {
            setError('Failed to load character');

        } finally {
            setLoading(false);
            setInitialLoading(false);
        }
    };

    const loadMore = async () => { //load next page
        const isInternet = await checkInternetConnection();
        if (!isInternet) {
            showSimpleAlert(AlertMessagesEnum.NoInternet);
        } else if(!loading && isNextPage){
            loadCharacters(page );

        }
    };

     const reset = async () => {
        setCharacters([]);
        setPage(1);
        setIsNextPage(true);
        setError(null);
    };

    return {
        characters,
        loading,
        initialLoading,
        loadMore,
        error,
        filters,
        setFilter,
        isConnected,
    };
}