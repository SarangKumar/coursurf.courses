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
                    <div className='card-header'>
                        <div className='showing'>Showing <b>{1515} courses</b></div>

                        <select name="category" id="cars" placeholder='Sort by Relevency'>
                            {/* <option value selected>Sort by Relevency</option> */}
                            <option value="relevency">Relevency</option>
                            <option value="rated-up">Highest Rated</option>
                            <option value="rated-down">Lowest Rated</option>
                            <option value="created-up">Most Recently Added</option>
                        </select>
                    
                    </div>
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