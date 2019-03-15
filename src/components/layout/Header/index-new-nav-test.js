import React from 'react';
import styled from 'styled-components';
import MainNav from 'components/navigation/MainNav';

const HeaderContainer = styled.div`
  // margin-top: 52px;
`;

/* eslint-disable react/prefer-stateless-function */
export const Header = () => (
  <HeaderContainer>
    {/* <MainNav /> */}
    <div class="main-nav">
      <h1>
        Burger Menu <span>by JLNLJN</span>
      </h1>

      <input id="burger" type="checkbox" />

      <label for="burger">
        {' '}
        <span /> <span /> <span />{' '}
      </label>

      <nav>
        <ul>
          <li>
            <a href="#">Link #1</a>
          </li>
          <li>
            <a href="#">Link #2</a>
          </li>
          <li>
            <a href="#">Link #3</a>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderContainer>
);

export default Header;
