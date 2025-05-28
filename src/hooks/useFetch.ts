/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { useEffect, useState } from "react";


const localCache: Record<string, unknown> = {};


export const useFetch = <T = unknown>( url: string) => {
  
    const fetchInitState: FetchedState = {
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    }
    const [state, setState]: [FetchedState, Function] = useState(fetchInitState);

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = () => {
        setState(fetchInitState);
    }
    
    const getFetch = async () => {

        if( localCache[url] ) {
            console.log( 'Usando Cache' );
            const resultWithCache: FetchedState = {
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            } 
            setState( resultWithCache );
            return;
        }

        setLoadingState();
        await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos
        const response: Response = await fetch( url );
        if( ! response.ok ) {
            const fetchErrorState: FetchedState = {
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            }
            setState( fetchErrorState);
            return;
        }
        const data = (await response.json());
        
        const fetchSuccessState: FetchedState = {
                    data: data,
                    isLoading: false,
                    hasError: false,
                    error: null
                }
        setState( fetchSuccessState );

        // Manejo de Cache - Cache de respuesta de la petición.
        localCache[url] = data;



        return ;
    };


    return {
        data: state.data as T | null,
        isLoading: state.isLoading,
        hasError: state.hasError
    }


};

export interface FetchedState {
    data: object | null,
    isLoading: boolean,
    hasError: boolean,
    error: FetchedError | null
}
export interface FetchedError {
    code: number,
    message: string
}