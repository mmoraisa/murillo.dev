import Header from '../../header';
import Default from '../default';

const Layout = ({ children }) => (
  <Default>
    <Header />
    { children }
  </Default>
);

export default Layout;
