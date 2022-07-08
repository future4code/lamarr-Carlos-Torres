import styled from 'styled-components'

export const ItemLista=styled.li`
    margin: 5px 10px;
    list-style: none;
    width: 10vw;
    border: 2px solid black;
    div{
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
        p:nth-child(1){
            color: blue;
        }
        p:nth-child(2){
            color: orange;
        }
        p:nth-child(3){
            color: red;
        }
    }
    p{
        margin-left: 10px;
        text-align: left;
        font-weight: bold;
    }
`