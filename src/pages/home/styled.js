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

        h1 {
            color: white;
            text-align: center;
            margin: 10% 0 45px 0;
            font-size: 2rem;
        }

        p {
            color: white;
            width: 800px;
            text-align: center;
            font-size: 1.2rem;
            line-height: 1.5rem;
            margin: auto;
        }

        button {
            display: block;
            width: 250px;
            height: 30px;
            margin: 0 auto;
            margin-top: 40px;
            background-color: #721CAB;
            border: 1px solid #721CAB;
            border-radius: 3px;
            font-weight: bold;
            box-shadow: 2px 2px 3px 2px #201F1F;
        }

        button > a {
            text-decoration: none;
            color: white;
        }
    }
`

export default HomeContainer
