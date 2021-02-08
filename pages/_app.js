import App from "next/app";
import Layout from "../components/Layout";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout 
    >
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  return { ...appProps, pageProps: { path: ctx.pathname } };
};

export default MyApp;
