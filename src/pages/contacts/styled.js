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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;

      .profile-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .profile {
        display: block;
        width: 150px;
        border-radius: 50%;
        margin: 20px auto;
        border: 3px solid #721CAB;
        padding: 4px;
        /* box-shadow: 2px 2px 4px 1px #131313; */
      }

      .text {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
          width: 80%;
        }

        p {
          width: 85%;
          color: white;
          text-align: center;
          line-height: 1.2rem;
        }
      }

      h2 {
        color: white;
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 20px;
      }

      section {
        width: 80%;
        height: 150px;
        margin-top: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
      }

      .contact {
        cursor: pointer;

        .icon {
          height: 40px;
          display: block;
          margin: 0 auto;
        }
      }
    }

    @media (max-width: 500px) {
      main {
        .profile-container {
          margin-top: 10px;
        }
        .profile {
          margin: auto;
        }

        .text {
          width: 85%;
        }

        section {
          width: 95%;
        }
      }
    }
`

export default ContactContainer
