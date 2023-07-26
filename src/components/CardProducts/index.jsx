import { StyledCardProducts } from "./styles"

export const CardProducts =  ({img, name, category, price, addcart, id}) => {

    return(
        <StyledCardProducts>
            <div className="divImg">
             <img src={img} alt={`Imagem do ${name}`} />
            </div>
            <h2>{name}</h2>
            <span>{category}</span>
            <p>{Number(price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}</p>
            <button type='button' onClick={()=> {
                addcart(id)
            }}>Adicionar</button>
            
        </StyledCardProducts>
    )
}