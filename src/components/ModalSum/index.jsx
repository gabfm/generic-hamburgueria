import { StyledSum } from "./styles"

export const ModalSum = ({carts}) => {

    const sumTotal = carts.reduce((acc, sum) =>(acc + sum.price ),0)


    return(
        <StyledSum>
            <h2>Total</h2>
            <p>{Number(sumTotal).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}</p>
        </StyledSum>
    )
}