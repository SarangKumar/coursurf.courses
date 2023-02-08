import Head from 'next/head';
import Card from '../components/cardMain';
import Navbar from '../components/navbar';
import Search from '../components/search';
import { CardSkeleton } from '../components/skeleton';
import Titles from '../components/titles';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coursurf</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <section id='hero-section'>
        <div className="content">
          <h1>Let&apos;s get you a new course</h1>
          <Search />
        </div>
      </section>
      <section id="trending-courses">
        <Titles certificate="Master's and Bachelor's Degrees" heading="Find a top degree that fits your life" desc="Breakthrough pricing on 100% online degrees from top universities." />
        <div className="card-container">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section id='institutions'>
        <Titles certificate="Courses and Specializations"
         heading="Advance your career with new skills"
         desc="Choose from over 4,000 courses in topics like business analytics, graphic design, Python, and more." />
        <div className="card-container">
          <CardSkeleton />
          <Card />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </section>

    </div>
  );
}
