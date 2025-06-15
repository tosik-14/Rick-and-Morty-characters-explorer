import { useEffect, useState, useRef } from 'react';
import { getCharacters } from '../../services/api/getCharacters';
import { getFilteredCharacters } from '../../services/api/getFilteredCharacters';
import { Character } from '../../entities/character';

export function useCharacters() {
    //const charactersRef = useRef<any[]>([]);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    //const pageRef = useRef(1);
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

            /*const newCharacters = data.results.filter(
                (char: Character) => !characters.some(c => c.id === char.id)
            );*/
            if(page === 1) {
                setCharacters(data.results);
            } else{
                setCharacters((prev) => [...prev, ...data.results]);
            }


            setIsNextPage(!!data.info.next);
            setPage(pageToLoad + 1);

        } catch (err) {
            setError('Failed to load characters');
        } finally {
            setLoading(false);
            setInitialLoading(false);
        }
    };

    /*function findDuplicates(arr) {
        const seen = new Set();
        const duplicates = new Set();
        arr.forEach(item => {

            if (seen.has(item.id)) {
                duplicates.add(item.id);
            } else {
                seen.add(item.id);
            }
        });
        return Array.from(duplicates);

    }
    const duplicates = findDuplicates(characters);
    if (duplicates.length > 0) {
        console.log('Duplicates:', duplicates);
    }*/




    const loadMore = () => { //load next page
        if(!loading && isNextPage){
            //loadCharacters(pageRef.current + 1);
            loadCharacters(page );
            //setPage((prev) => prev + 1);

        }
    };

     const reset = async () => {
        setCharacters([]);
        setPage(1);
        setIsNextPage(true);
        setError(null);
    };

    const ids = characters.map(c => c.id);
    console.log('IDs:', ids.join(' - '));

    return {
        characters,
        loading,
        initialLoading,
        loadMore,
        reset,
        error,
        filters,
        setFilter,
    };
}