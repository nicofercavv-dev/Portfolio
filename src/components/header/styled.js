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

    @media (max-width: 500px) {
        justify-content: center;
        flex-direction: column;

        h2 {
            margin: 0;
            margin-top: 30px;
            font-size: 1.6rem;
            margin-bottom: 20px;
        }

        nav {
            width: 100%;
            flex-wrap: wrap;
            height: auto;
        }

        nav > a {
            margin: 0 10px;
        }
    }
`

export default NavContainer
