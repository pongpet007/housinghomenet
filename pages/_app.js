import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";
import "../styles/globals.css";
import "aos/dist/aos.css";

import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  const parking = false;
  return parking === true ? (
    <div>
      <h1>Under construction</h1>
    </div>
  ) : (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
