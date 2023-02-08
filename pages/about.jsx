import Head from 'next/head'
import React from 'react'
import Carddetail from '../components/cardDetail'
import NavbarSearch from '../components/navbarSearch'

const about = () => {
  return (
    <div>
      <Head>
        <title>Coursurf-About</title>
        <meta charSet='UTF-8' />
        <meta name='description' content="Coursurf is the ultimate online platform for finding and comparing courses from top providers. With Coursurf, you can easily search and compare courses based on your interests, budget, and learning goals. Whether you're looking to upskill in a new subject, enhance your career prospects, or simply follow a personal passion, Coursurf provides you with all the information you need to make informed decisions about your education. Our website aggregates courses from leading providers, so you can compare options and find the perfect course for you. Get started today and take the first step towards reaching your educational goals." />
        <meta name='keywords' content='coursurf, next, course provider, free courses' />
        <meta name='author' content='Adithya SK, Sarang Kumar, Sakthe Balan' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /></Head>
      <NavbarSearch />
      <Carddetail />
    </div>

  )
}

export default about