import Headers from "../Headers";
import Footer from "../Footer";
import IconContact from "../iconContact";
import Head from "next/head";

const BaseLayout = (props) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
        <meta name="author" content="Brandex Directory Co., Ltd." />
        <meta name="robots" content="index,follow" />
        {/* <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossOrigin="anonymous"></script> */}
      </Head>
      <Headers />
      <div style={{ marginTop: 65 }}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
