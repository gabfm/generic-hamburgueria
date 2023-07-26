import  styled  from "styled-components";

export const StyledModalItens = styled.li`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;


    .CartBody{
        height: 100%;
        display: flex;
        
        border-radius: 5px;

    }
    figure {
        background: #E0E0E0;
    }
    img{
        height: 8.2rem;
        width: 8rem;
        background-color: var(--color-grey-1) ;
        border-radius: 0.5rem;
    }

    p{
        color: black;
    }
`