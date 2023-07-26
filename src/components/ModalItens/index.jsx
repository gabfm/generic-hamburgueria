import { StyledModalItens } from './styles'
import {ImBin} from 'react-icons/im'

export const ModalItens = ({carts, removeItem, }) => {

    return(
        <>
            <ul>
            {carts.map((item) =>
            <StyledModalItens key={item.id}>
                <div className='CartBody'>
                    <figure>
                    <img src={item.img} alt={` Imagem do ${item.name}`} />
                    </figure>    
                    <p className='nameItemList'>{item.name}</p>
                </div> 
                    <button onClick={() => removeItem(item.id)}><ImBin /></button>
            </StyledModalItens> )}
            </ul>
        </>
    )
}