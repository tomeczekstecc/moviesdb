import type {NextPage} from 'next'
import Link from 'next/link'
import {useFetchMovies} from "../api/fetchHooks";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Spinner from "../components/Spinner/Spinner";
import React from "react";

import {IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from "../config";


const Home: NextPage = () => {

    const [query, setQuery] = React.useState('');

    const {
        data,
        fetchNextPage,
        isFetching,
        isFetchingNextPage,
        fetchPreviousPage,
        isLoading,
        error
    } = useFetchMovies(query);

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        const {scrollTop, clientHeight, scrollHeight} = e.currentTarget
        console.log(scrollHeight - scrollTop, clientHeight)
        console.log(scrollHeight - scrollTop === clientHeight)
        if (scrollHeight - scrollTop - 20 < clientHeight) fetchNextPage()
    }


    if (error) return <div>Something went wrong!!!</div>


    return (
        <>


            <main className='relative h-screen overflow-y-scroll' onScroll={handleScroll}>

                <Header setQuery={setQuery}/>
                {!query && data && data.pages ?
                    <Hero text={data?.pages[0]?.results[0]?.overview}
                          title={data?.pages[0]?.results[0]?.title}
                          imgUrl={data?.pages[0]?.results[0]?.backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE
                              + data?.pages[0]?.results[0]?.backdrop_path : '/no_image.jpg'}/> : null}


                <Grid className='p-4 max-w-7xl m-auto'
                      title={query ? `Search Results:  ${data?.pages[0]?.total_results}` : 'Popular movies'}>

                    {data && data.pages.map(page => page.results.map(movie =>
                        <Link key={movie.id} href={`/${movie.id}`}>
                            <div className={'cursor-pointer hover:opacity-80 duration-300'}><Card
                                title={movie.original_title}
                                imgUrl={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : '/no_image.jpg'}/>
                            </div>
                        </Link>
                    ))}
                </Grid>

                {(isLoading || isFetching || isFetchingNextPage) ? <Spinner/> : null}
            </main>
        </>)

}

export default Home
