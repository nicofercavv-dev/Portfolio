import styled from 'styled-components'

const ProjectsPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15fr 85fr;
    background: rgb(22,22,22);
    background: linear-gradient(135deg, rgba(22,22,22,1) 0%, rgba(32,31,31,1) 35%, rgba(61,61,61,1) 100%);

    main {
        position: relative;
        h1 {
            color: white;
            text-align: center;
            margin-top: 40px;
            font-size: 1.8rem;
        }

        .carrossel {
            height: 360px;
            margin: 20px auto 0 auto;
            overflow: hidden;
            width: 900px;

            .left, .right {
                height: 50px;
                width: 50px;
                background-color: transparent;
                border: none;
                position: absolute;
                top: 47%;
                margin: auto;
                cursor: pointer;

                svg {
                    width: 40px;
                    height: 40px;
                    color: #721CAB;
                }
            }

            .left {
                left: 8%;
            }

            .right {
                right: 8%;
            }
        }

        .carrossel-interno {
            height: 360px;
            white-space: nowrap;
            transition: ease 1s;
        }

        .carrossel-item {
            width: 100%;
            height: 100%;
            display: inline-flex;
            justify-content: space-around;
            align-items: center;
            white-space: normal;

            .descricao {
                width: 45%;
                height: 60%;
                margin: 0;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: flex-start;

                h3 {
                    font-size: 1.3rem;
                    color: white;
                }

                p {
                    color: white;
                    width: 90%;
                    max-height: 100%;
                    word-break: break-all;
                }

                .links > a {
                    margin-right: 20px;
                    color: #721CAB;

                    &:hover {
                        transition: ease 1s;
                        animation: underline 1s forwards;
                        color: #8525BD;
                        cursor: pointer;
                    }
                }
            }

            img {
                max-width: 45%;
            }
        }
    }

    @keyframes underline {
        0% {
            color: #721CAB;
            border-bottom: 2px solid transparent;
        }
        50% {
            color: #8525BD;
            border-bottom: 2px solid #8525BD;
        }
        100% {
            color: #8E39BF;
            border-bottom: 2px solid #8E39BF;
        }
    }
`

export default ProjectsPageContainer
