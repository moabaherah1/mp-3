// Mohammed Abaherah
// Nav.tsx
// October 21, 2025

import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.nav`
    background-color: #E0E2DB;
    width: 30%;
    display: flex;
    justify-content: center;
    padding-bottom: 60px;

    @media screen and (max-width: 1024px) {
        width: 100%;
        overflow-x: auto;
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
        justify-content: center;
        flex-wrap: wrap;
        padding: 10px 0;
    }
`;

const NavItem = styled.li`
    border: 5px solid black;
    border-radius: 50%;
    padding: 2%;
    width: 80%;
    margin-top: 70px;
    text-align: center;
    background-color: #E0E2DB;

    @media screen and (max-width: 1024px) {
        width: auto;
        margin-top: 15px;
        border-radius: 25px;
        padding: 10px 15px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 15px;
`;

export default function Nav() {
    return (
        <NavWrapper>
            <NavList>
                <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
                <NavItem><StyledLink to="/education">Education</StyledLink></NavItem>
                <NavItem><StyledLink to="/experience">Experience</StyledLink></NavItem>
                <NavItem><StyledLink to="/references">References</StyledLink></NavItem>
                <NavItem><StyledLink to="/projects">Projects</StyledLink></NavItem>
                <NavItem><StyledLink to="/about">About Me</StyledLink></NavItem>
            </NavList>
        </NavWrapper>
    );
}
