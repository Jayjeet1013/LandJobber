import Hero from "@/components/Home/Hero";
import Head from "next/head"
import { useEffect } from "react";
import ReactGA from "react-ga";



export default function Home() {
  useEffect(() => {
    ReactGA.initialize("G-YRW3H22G57");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    
  <div>
      <Head>
        <title>JobYard</title>
        <meta name="description" content="JobYard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>


<div>
<Hero/>
</div>


  </div>
  );
}
