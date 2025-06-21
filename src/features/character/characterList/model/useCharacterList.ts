import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { getCharacters } from '../../api/getCharacters';
import { getFilteredCharacters } from '../../api/getFilteredCharacters';
import { Character } from '../../../../entities/character';
import { loadOfflineCharacters } from '../../../../services/offlineCharacters/loadOfflineCharacters';

export function useCharacterList() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [isNextPage, setIsNextPage] = useState(true);
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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


    useEffect(() => { //first render
        reset();
        loadCharacters(1);

    }, [filters.status, filters.species]);

    const loadCharacters = async (pageToLoad: number) => {
        if (loading || !isNextPage) return;

        setLoading(true);
        try {

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
            if (err.message === 'Network request failed') {

                const cached = await loadOfflineCharacters();

                if (cached && cached.length > 0) {
                    setCharacters(cached);
                    setIsNextPage(false);
                } else {

                    Alert.alert(
                        'No Internet Connection',
                        'Please check your internet connection and try again.',
                        [{ text: 'Try again', onPress: () => {
                                setTimeout(() => {
                                    loadCharacters(pageToLoad);
                                }, 4000);
                            }
                        }]
                    );

                }
            } else {
                setError('Failed to load character');
            }
        } finally {
            setLoading(false);
            setInitialLoading(false);
        }
    };

    const loadMore = () => { //load next page
        if(!loading && isNextPage){
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
    };
}