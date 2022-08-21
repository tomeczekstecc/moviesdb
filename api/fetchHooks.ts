import {useInfiniteQuery} from "@tanstack/react-query";

import {fetchMovies} from "./fetchFunctions";

import {Movies} from "./types";

export const useFetchMovies = (search: string) => {
    return useInfiniteQuery(['movies', search],90 fetchMovies, {
}
