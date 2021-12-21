import "../styles/globals.scss";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
