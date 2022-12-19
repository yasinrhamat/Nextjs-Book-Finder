import Head from 'next/head'
import React from 'react';
import SearchBar from '../Components/SearchBar';
import Grid from "@mui/material";

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>SCWA Winter Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='title'>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className='description'>
          Get started by editing <code>pages/index.js</code>
        </p>
        <div className='searchBar'>
          <SearchBar />
        </div>
      </main>
    </div>
  )
}