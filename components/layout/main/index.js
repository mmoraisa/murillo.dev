import React, { Fragment } from 'react';
import TopBar from '../../TopBar';

const Layout = ({ children }) => (
  <Fragment>
    <TopBar />
    { children }
  </Fragment>
);

export default Layout;
