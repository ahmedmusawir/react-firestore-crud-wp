import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  // The Main Container
`;

export const Main = ({ children }) => <MainContainer>{children}</MainContainer>;

export default Main;
