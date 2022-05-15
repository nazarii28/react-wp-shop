import '../styles/globals.css'
import '../styles/template/bootstrap.min.css'
import '../styles/template/font-awesome.min.css'
import '../styles/template/main.css'
import Head from "next/head";
import {Provider} from "react-redux";
import {store} from "../store";

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700" rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp

