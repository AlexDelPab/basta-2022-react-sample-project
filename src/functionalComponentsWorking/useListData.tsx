import { useEffect, useState } from "react";
import { Store } from "../services/Store";

export function useListData<T>(store: Store<T>) : [isLoading: boolean, data: T[]] {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        (async () => {
            await store.loadAll();
            setIsLoading(false);
            setData(store.elements);
        })();
    }, []);

    return [
        isLoading,
        data
    ];
}