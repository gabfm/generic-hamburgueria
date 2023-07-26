import { useKeydown } from "../../hooks/useKeydown"
import { useOutclick } from "../../hooks/useOutclick"
import { ModalSum } from "../ModalSum"
import { ModalItens } from "../ModalItens"
import { ModalConteiner } from "./styles"


export const Modal = ({ carts, setCarts, setIsOpen}) => {
    const modalRef = useOutclick(() => {
        setIsOpen(false)
      })
    
    const buttonRef = useKeydown('Escape', (e) => {
        e.click()
      })
    
    const removeItem = (itemId)=>{
        if(confirm('Deseja mesmo remover o item do seu carrinho ?')){
            setCarts(carts.filter(cart => cart.id !== itemId))
        }
    }
    const removeAllItemsFromCart = () => {
        setCarts([])
      }

    return(
        <ModalConteiner role="dialog" >
            <section  ref={modalRef}>
                <header>
                    <p>Carrinho de compras</p>
                    <button className="closeModal" ref={buttonRef} onClick={() => setIsOpen(false)}> X </button>
                </header>
                    <ModalItens removeItem={removeItem} carts={carts}/>
                    <ModalSum carts={carts}/>
                    <div>
                <button className="removeAll"
                    onClick={() => removeAllItemsFromCart()}
                >
                    Remover todos
                </button>
                    </div>
             </section>
      </ModalConteiner>
    )
}