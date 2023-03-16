import styled from 'styled-components'
const triangulo = `${process.env.REACT_APP_BASEURL}/img/triangulo.svg`

const StackContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15fr 85fr;
    background: rgb(22,22,22);
    background: linear-gradient(135deg, rgba(22,22,22,1) 0%, rgba(32,31,31,1) 35%, rgba(61,61,61,1) 100%);

    main {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .sections {
            width: 40%;
            height: 90%;

            svg {
                height: 40px;
                color: white;
            }

            p {
                margin-top: 10px;
                color: white;
            }
        }

        .sections > button {
            display: block;
            background: transparent;
            border: 1px solid #721CAB;
            margin: 5px auto;
            width: 350px;
            height: 130px;
            float: right;
            text-decoration: none;


            p {
                text-align: center;
            }

            &:hover {
                transform: scale(1.015);
                transition: ease 1s;
                cursor: pointer;
            }
        }

        .sections > .active {
            background: rgb(133,37,189);
            background: linear-gradient(135deg, rgba(133,37,189,0.25) 0%, rgba(94,19,153,0.25) 48%, rgba(55,0,116,0.25) 100%);
        }

        .section-description {
            width: 45%;
            height: 90%;

            ul {
                width: 85%;
                margin: auto;
                list-style-image: url(${triangulo});
            }

            ul > li {
                font-size: 0.9rem;
                color: white;
                margin: 10px auto 15px auto;
                line-height: 1.3rem;
            }

            ul > li::marker {
                color: #721CAB;
            }
        }

        .current-description {
            animation: slide 2s forwards;
        }

        .section-description > h2 {
            color: white;
            font-size: 1.8rem;
            margin: 30px auto;
            text-align: center;

            /* &::after {
                content: '';
                position: absolute;
                background-color: #721CAB;
                width: 10%;
                height: 2px;
                top: 13%;
                left: 45%;
            } */
        }
    }

    @keyframes slide {
        0% {
            opacity: 0.1;
            transform: translateX(-10px);
        }
        100% {
            opacity: 1;
            transform: translate(0);
        }
    }

    @media (max-width: 500px) {
        main {
            flex-direction: column;
            .sections {
                width: 95%;
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 10px;

                svg {
                    height: 20px;
                }

                p {
                    margin-top: 0;
                    font-size: 0.7rem;
                }
            }
            .sections > button {
                width: 105px;
                height: 55px;
            }

            .section-description {
                width: 90%;
                height: 90%;

                ul > li {
                    font-size: 0.8rem;
                    text-align: justify;
                }
            }

            .section-description > h2 {
                margin: 10px auto;
            }
        }

        @keyframes slide {
        0% {
            opacity: 0.1;
            transform: translateY(-10px);
        }
        100% {
            opacity: 1;
            transform: translate(0);
        }
    }
    }
`

export default StackContainer
