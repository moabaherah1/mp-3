// Mohammed Abaherah
// Nav.tsx
// October 20, 2025

import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav`
    background-color: #E0E2DB;
    width: 30%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

const NavList = styled.ul`
    padding-left: 0;
    list-style: none;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const NavItem = styled.li`
    border: 5px solid black;
    border-radius: 50%;
    padding: 2%;
    width: 80%;
    margin-top: 70px;

    @media screen and (max-width: 1024px) {
        width: auto;
        margin: 5px;
    }
`;


const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:visited { color: inherit; }    
`;
export function Nav() {
    return (
        <NavWrapper>
            <NavList>
                <NavItem><NavLink to="/">Home</NavLink></NavItem>
                <NavItem><NavLink to="/education">Education</NavLink></NavItem>
                <NavItem><NavLink to="/experience">Experience</NavLink></NavItem>
                <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
                <NavItem><NavLink to="/references">References</NavLink></NavItem>
                <NavItem><NavLink to="/about">About Me</NavLink></NavItem>
            </NavList>
        </NavWrapper>
    );
}
