import  styled  from "styled-components";

export const StyledSum = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height: 10%;
    padding: 2rem;
    border-top: 0.2rem solid var(--color-grey-2);

    h2,p{
        display: flex;
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-3);
    }


    h2{
        color: var(--color-grey-6);
    }

    p{
        color: var(--color-grey-2);
    }


`