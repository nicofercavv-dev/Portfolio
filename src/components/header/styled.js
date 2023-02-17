import styled from 'styled-components'

const NavContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        margin-left: 30px;
        font-size: 1.5rem;
        color: white;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
    }

    nav > a {
        height: 23px;
        font-size: 1.1rem;
        color: white;
        margin: 0 30px;
        text-decoration: none;
    }
    nav > .active {
        color: white;
        border-bottom: 3px solid #721CAB;
    }
`

export default NavContainer
