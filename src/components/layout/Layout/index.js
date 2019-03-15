import React from 'react';
import { Header, Main } from 'components/layout';

export const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <Main>{children}</Main>
  </React.Fragment>
);

export default Layout;
