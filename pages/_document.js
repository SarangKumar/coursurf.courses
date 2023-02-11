import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta charSet='UTF-8' />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name='keywords' content='coursurf, next, course provider, free courses' />
                <meta name='author' content='Adithya SK, Sarang Kumar, Sakthe Balan' />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
                <meta name="theme-color" content="#FD8A45" />
                <link rel='manifest' href='/manifest.json' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}