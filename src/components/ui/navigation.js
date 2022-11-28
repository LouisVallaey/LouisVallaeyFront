import * as React from 'react'
import styled from 'styled-components'
import theme from './theme'
import logoTextual from '../../images/logoTextual.svg'
import { Link } from 'gatsby'


const NavigationBar = styled.div`
position: absolute;
display: flex;
justify-content: space-around;
align-items: center;
height: 6rem;
width: 100%;
`
const LogoContainer = styled.div`
position: absolute;
left: 3rem;
img{
    height: 2.5rem;
}
@media only screen and (max-width: 1000px){
    display: none;
}
`
const NavItem = styled(Link)`
text-decoration: none;
font-family: 'BROLIMO';
font-size: 1.275rem;
color: ${theme.palette.common.white};
margin: 0px 20px 0px 20px;
@media only screen and (max-width: 500px){
    font-size: 1rem;
}

`
const NavItemSelected = styled(Link)`
text-decoration: none;
font-family: 'BROLIMO';
font-size: 1.275rem;
color: ${theme.palette.common.white};
border-bottom: 1px solid ${theme.palette.common.white};
margin: 0px 20px 0px 20px;
@media only screen and (max-width: 500px){
    font-size: 1rem;
}
`

export default function Navigation({ pages }) {

    const currentPath = typeof window !== 'undefined' ? window.location.pathname: '';
    const activeIndex = () => {
        const found = pages.indexOf(pages.filter(({ node: { name, link } }) => (link || `/${name.toLowerCase()}`) === currentPath)[0])
        return found === -1 ? false : found
    }
    return (
        <NavigationBar>
            <LogoContainer>
                <img src={logoTextual} alt='logo louis vallaey' />
            </LogoContainer>
            <div>
                {pages.map((page, i) => {
                    return (activeIndex() === i) ? 
                    <NavItemSelected to={page.node.link || `/${page.node.name.toLowerCase()}`} key={page.node.id}>{page.node.name}</NavItemSelected> 
                    : 
                    <NavItem to={page.node.link || `/${page.node.name.toLowerCase()}`} key={page.node.id}>{page.node.name}</NavItem>
                })}
            </div>
        </NavigationBar>
    )
}