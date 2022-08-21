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

const Home: NextPage = () => {

    const [query, setQuery] = React.useState('');

    const {data, fetchNextPage, fetchPreviousPage, isLoading} = useFetchMovies(query);



    return (<main className='relative h-screen overflow-y-scroll'>

        <Header/>
        <Hero/>
        <Grid/>
        <Card/>
        <Spinner/>
    </main>)

}

export default Home
