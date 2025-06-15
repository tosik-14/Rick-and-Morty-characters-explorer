import { useEffect, useState, useRef } from 'react';
import { getCharacters } from '../../services/api/getCharacters';

export function useMainScreen() {
    //const charactersRef = useRef<any[]>([]);
    const [characters, setCharacters] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    //const pageRef = useRef(1);
    const [isNextPage, setIsNextPage] = useState(true);
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => { //first render
        loadCharacters(1);

    }, []);

    const loadCharacters = async (pageToLoad: number) => {
        if (loading || !isNextPage) return;

        setLoading(true);
        try {
            const data = await getCharacters(pageToLoad);

            setCharacters((prev) => {
                const newCharacters = data.results.filter(
                    newChar => !prev.some(existingChar => existingChar.id === newChar.id)
                );
                return [...prev, ...newCharacters];
            });
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

    /*const ids = characters.map(c => c.id);
    console.log('IDs:', ids.join(' - '));*/

    return {
        characters,
        loading,
        initialLoading,
        loadMore,
        error,
    };
}