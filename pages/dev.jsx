import Head from 'next/head';
import React from 'react'
import CardDetail from '../components/cardDetail';
import Filter from '../components/filter';
import NavbarSearch from '../components/navbarSearch';
import { CardDetailSkeleton } from '../components/skeleton';

const dev = () => {

    return (
        <div>
            <Head>
                <title>Coursurf</title>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='description' content="Coursurf is the ultimate online platform for finding and comparing courses from top providers. With Coursurf, you can easily search and compare courses based on your interests, budget, and learning goals. Whether you're looking to upskill in a new subject, enhance your career prospects, or simply follow a personal passion, Coursurf provides you with all the information you need to make informed decisions about your education. Our website aggregates courses from leading providers, so you can compare options and find the perfect course for you. Get started today and take the first step towards reaching your educational goals." />
            </Head>
            <NavbarSearch />
            <div className='search-head'>
                <div>
                    Search result for <b>Python</b>
                </div>

                    <div className='search-count'>
                        {'1515'} courses
                    </div>
            </div>
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
                        <CardDetail />
                        <CardDetail />
                        <CardDetail />
                        <CardDetail />
                        <CardDetail />
                        <CardDetail />
                        <CardDetail />
                        <CardDetailSkeleton />
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
