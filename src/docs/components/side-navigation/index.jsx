import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavContext = createContext();

const Container = styled.div`
  direction: ${({ ltr }) => (ltr ? 'ltr' : 'rtl')};
  width: 100%;
`;

const NavTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #666;
  padding: 16px 24px 8px;
  text-transform: uppercase;
`;

const NavItemContainer = styled.div`
  padding: 8px 24px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#000' : '#666')};
  background-color: ${({ selected }) => (selected ? '#f5f5f5' : 'transparent')};
  &:hover {
    background-color: #f5f5f5;
  }
`;

const NavItemTitle = styled.span`
  font-size: 14px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const NavItem = ({ title, ltr = false, id }) => {
  const { selectedId, setSelectedId } = useContext(NavContext);
  const selected = selectedId === id;

  return (
    <NavItemContainer 
      selected={selected} 
      ltr={ltr}
      onClick={() => setSelectedId(id)}
    >
      <NavItemTitle>{title}</NavItemTitle>
    </NavItemContainer>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  ltr: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

const Nav = ({ children, id }) => {
  const { selectedId } = useContext(NavContext);
  const selected = selectedId === id;

  return React.cloneElement(children, { selected });
};

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

const SideNav = ({ children, defaultSelectedPath }) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedPath);

  return (
    <NavContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </NavContext.Provider>
  );
};

SideNav.propTypes = {
  children: PropTypes.node.isRequired,
  defaultSelectedPath: PropTypes.string.isRequired,
};

const SideNavigation = ({ ltr = false }) => (
  <Container ltr={ltr}>
    <NavTitle>معرفی</NavTitle>
    <SideNav defaultSelectedPath="1">
      <Nav id="1">
        <Link href="/">
          <NavItem title="چرا؟" ltr={ltr} id="1" />
        </Link>
      </Nav>
      <Nav id="2">
        <NavItem title="ویژگی‌ها" ltr={ltr} id="2" />
      </Nav>
      <Nav id="3">
        <NavItem title="منابع" ltr={ltr} id="3" />
      </Nav>
      <NavTitle>شروع و راه اندازی</NavTitle>
      <Nav id="4">
        <NavItem title="نصب" ltr={ltr} id="4" />
      </Nav>
      <Nav id="5">
        <NavItem title="راه اندازی" ltr={ltr} id="5" />
      </Nav>
      <Nav id="6">
        <NavItem title="مفاهیم" ltr={ltr} id="6" />
      </Nav>
      <NavTitle>کامپوننت‌ها</NavTitle>
      <Nav id="7">
        <Link href="/components/typography">
          <NavItem title="تایپوگرافی" ltr={ltr} id="7" />
        </Link>
      </Nav>
      <Nav id="8">
        <Link href="/components/button">
          <NavItem title="دکمه‌ها" ltr={ltr} id="8" />
        </Link>
      </Nav>
      <Nav id="9">
        <Link href="/components/avatar">
          <NavItem title="آواتار" ltr={ltr} id="9" />
        </Link>
      </Nav>
      <Nav id="10">
        <Link href="/components/icon">
          <NavItem title="آیکون" ltr={ltr} id="10" />
        </Link>
      </Nav>
      <Nav id="11">
        <Link href="/components/icons">
          <NavItem title="آیکون‌ها" ltr={ltr} id="11" />
        </Link>
      </Nav>
      <Nav id="12">
        <Link href="/components/card">
          <NavItem title="کارت" ltr={ltr} id="12" />
        </Link>
      </Nav>
      <Nav id="13">
        <Link href="/components/cover">
          <NavItem title="کاور" ltr={ltr} id="13" />
        </Link>
      </Nav>
      <Nav id="14">
        <Link href="/components/form">
          <NavItem title="فرم" ltr={ltr} id="14" />
        </Link>
      </Nav>
      <Nav id="15">
        <Link href="/components/product">
          <NavItem title="کامپوننت های پروداکت" ltr={ltr} id="15" />
        </Link>
      </Nav>
    </SideNav>
  </Container>
);

SideNavigation.propTypes = {
  ltr: PropTypes.bool,
};

export default SideNavigation;
