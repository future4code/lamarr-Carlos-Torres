import styled from 'styled-components'

export const HomePageContainer = styled.div`

    main{

            background-color:red;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            padding: 1 rem;
    }

    form {

        display: flex;
        flex-direction:column;
        justify-content:center;
        max-width:40%;

        button{
            margin-top: 5px;
            padding: 5px;
        }

    }
`