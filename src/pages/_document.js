import { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;700;800&display=swap" rel="stylesheet" />

                {/* <Script 
          src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"
          strategy="afterInteractive"
        /> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
