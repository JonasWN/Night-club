import React from "react"
import Polygon from "./polygon"
import Link from "next/link"
import styled from "styled-components"
import { useRouter } from "next/router"
import { isMobile } from "react-device-detect"
import { GoThreeBars } from "react-icons/go"
import { device } from "../styles/layout"

const Nav = () => {
  const router = useRouter()
  const paths = [
    "/",
    "/about",
    "/blog",
    "/events",
    "/gallery",
    "/book",
    "/contact",
  ]

  if (!isMobile)
    return (
      <StyledNav>
        <img src="./assets/Logo.png" alt="Logo-Small" />
        <ul>
          {paths.map(path => (
            <li>
              <Link href={`${path}`}>
                <StyledUrl current={router.pathname === path ? true : false}>
                  {path === "/" ? "home" : path.substr(1)}
                </StyledUrl>
              </Link>
            </li>
          ))}
        </ul>
        <Polygon angle="left" />
        <Polygon angle="right" />
      </StyledNav>
    )
  return (
    <StyledNav>
      <img src="./assets/Logo.png" alt="Logo-Small" />
      {/* <ul className="burger"></ul> */}
      <GoThreeBars className="burger-menu" />
      <Polygon angle="left" />
      <Polygon angle="right" />
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  height: 100px;
  border-top: 1px solid ${props => props.theme.colors.accent};
  border-bottom: 1px solid ${props => props.theme.colors.accent};
  width: 100%;
  padding: 25px 5%;
  display: flex;
  justify-content: space-around;
  position: relative;
  position: sticky;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.dark};
  z-index: 20;

  @media ${device.mobile} {
    align-items: center;
    justify-content: space-evenly;
  }

  .burger-menu {
    fill: white;
    font-size: 40px;
  }

  img {
    width: 150px;
    height: 50px;

    @media ${device.mobile} {
      margin-left: 10px;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 300;

    li {
      color: ${props => props.theme.colors.white};
      text-transform: uppercase;
      font-size: 1.1rem;

      :not(:last-child) {
        margin-right: 15px;
      }

      &:hover {
        color: ${props => props.theme.colors.accent};
      }
    }
  }
`

const StyledUrl = styled.a`
  color: ${props => (props.current ? props.theme.colors.accent : "white")};

  &:hover {
    cursor: pointer;
  }
`

export default Nav
