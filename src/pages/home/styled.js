import styled from 'styled-components'

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15fr 85fr;
    background: rgb(22,22,22);
    background: linear-gradient(135deg, rgba(22,22,22,1) 0%, rgba(32,31,31,1) 35%, rgba(61,61,61,1) 100%);

    main {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        h1 {
            overflow: hidden;
            border-right: .15em solid #721CAB;
            white-space: nowrap;
            color: white;
            text-align: center;
            margin: 0 auto;
            font-size: 2rem;
            display: inline-block;
            animation: typing 2.5s steps(40, end),
            blink-typing 1s step-end infinite;
        }

        p {
            color: white;
            width: 800px;
            text-align: center;
            font-size: 1.2rem;
            line-height: 1.5rem;
            animation: appear 5s forwards;
        }

        button {
            display: block;
            width: 250px;
            height: 30px;
            margin: 0 auto;
            background-color: #721CAB;
            border: 1px solid #721CAB;
            border-radius: 3px;
            font-weight: bold;
            box-shadow: 3px 3px 3px 2px #201F1F;
            cursor: pointer;

            &:hover {
                translate: -1.5px -1.5px;
                box-shadow: 3px 3px 3px 4px #201F1F;
                transition: ease 1s;
            }
        }

        button > a {
            text-decoration: none;
            color: white;
        }
    }

    @keyframes typing {
        0% {
            width: 0;
        }
        100% {
            width: 40%;
        }
    }

    @keyframes blink-typing {
        0% {
            border-color: transparent;
        }
        50% {
            border-color: #721CAB;
        }
        100% {
            border-color: transparent;
        }
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media (max-width: 500px) {
        width: 100%;
        grid-template-rows: 20fr 80fr;

        main{
            justify-content: center;
            gap: 70px;

            h1 {
                font-size: 1.4rem;
                animation: typing 1s steps(15, end),
                blink-typing 1s step-end infinite;
            }

            p {
                width: 80%;
                font-size: 1rem;
            }
        }
    }
`

export default HomeContainer
