import globalStyles from '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

function MyApp({ Component, pageProps }) {
  return (<Component {...pageProps} />);
}
export default MyApp;
