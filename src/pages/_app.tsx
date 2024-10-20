import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Nav />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </ChakraProvider>
    </>
  );
}
