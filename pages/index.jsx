import Head from 'next/head';
import Card from '../components/card';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coursurf</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
