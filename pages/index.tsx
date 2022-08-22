import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
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

    const {data, fetchNextPage, fetchPreviousPage, isLoading} = useFetchMovies(query);


    console.log(data);

    return (<main className='relative h-screen overflow-y-scroll'>

        <Header setQuery={setQuery}/>
        {!query && data && data.pages ?
            <Hero text={data?.pages[0]?.results[0]?.overview}
                  title={data?.pages[0]?.results[0]?.title}
                  imgUrl={data?.pages[0]?.results[0]?.backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE
                      + data?.pages[0]?.results[0]?.backdrop_path : '/no_image.jpg'}/> : null}


        <Grid className='p-4 max-w-7xl` m-auto'
              title={query ? `Search Results:  ${data?.pages[0]?.total_results}` : 'Popular movies'}>

            {data && data.pages.map(page => page.results.map(movie =>
                <div key={movie.id}><Card
                    title={movie.original_title}
                    imgUrl={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : '/no_image.img'}/>
                </div>))}
        </Grid>

        <Spinner/>
    </main>)

}

export default Home
