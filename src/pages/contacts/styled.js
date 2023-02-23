import styled from 'styled-components'

const ContactContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15fr 85fr;
    background: rgb(22,22,22);
    background: linear-gradient(135deg, rgba(22,22,22,1) 0%, rgba(32,31,31,1) 35%, rgba(61,61,61,1) 100%);

    main {
      display: flex;
      flex-wrap: wrap;

      .profile-container {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .profile {
        display: block;
        width: 210px;
        border-radius: 50%;
        margin: auto;
        border: 2px solid #721CAB;
        padding: 7px;
        box-shadow: 2px 2px 4px 1px #131313;
      }

      .text {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        h2 {
          width: 80%;
        }

        p {
          width: 80%;
          color: white;
          text-align: center;
        }
      }

      h2 {
        color: white;
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 20px;
      }

      section {
        /* background-color: #721CAB; */
        width: 100%;
        height: 170px;
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      .contact {
        color: white;
        text-decoration: none;
        cursor: pointer;

        .icon {
          height: 50px;
          display: block;
          margin: 0 auto;
        }
      }
    }
`

export default ContactContainer
