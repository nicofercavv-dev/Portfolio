import styled from 'styled-components'

const IndicadoresContainer = styled.div`
    max-width: 400px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        background-color: rgb(0, 0, 0, .4);
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: none;
        margin: 0 5px;
        margin-top: 10px;
        cursor: pointer;
    }

    .active {
        background-color: #721CAB;
    }

    @media (max-width: 500px) {
        max-width: 300px;
    }
`
export default IndicadoresContainer
