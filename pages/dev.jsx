import Head from 'next/head';
import React from 'react'
import CardDetail from '../components/cardDetail';
import Filter from '../components/filter';
import { CardDetailSkeleton } from '../components/skeleton';

const dev = () => {

    return (
        <div>
            <Head>
                <title>Coursurf</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='search-dir'>
                <div className='filter'>
                    <Filter />
                </div>
                <main>
                    <div className='showing'>Showing <b>{1515} courses</b></div>
                    <div className='cards'>
                        <CardDetail />
                        <CardDetailSkeleton />
                        <CardDetail />
                        <CardDetail />
                    </div>
                </main>
            </div>

            {/* <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'} /> */}
        </div >
    )
}

export default dev;
