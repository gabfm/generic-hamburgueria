import { useState } from 'react'
import imgSearch from '../../assets/search-icon.svg'
import { Modal } from '../Modal/index'
import { StyledContainer } from '../../styles/grid';
import { StyledHeader } from './styles';
import {BsCartFill} from 'react-icons/bs'

export const Header = ({ setInputSearch, carts, setCarts}) =>{

    const [isOpen, setIsOpen] = useState(false);
 

    const searchSubmit = (e) =>{
        e.preventDefault()
    }

    return(
        <StyledHeader>
            <StyledContainer className='DivHeader'>
                <span>
                    <h1>Burguer Kenzie</h1>
                    <button onClick={()=> setIsOpen(true)}><BsCartFill/></button>
                </span>
                <div className='divInput'>
                    <form onSubmit={searchSubmit}>
                        {isOpen ? <Modal  carts={carts} setCarts={setCarts} setIsOpen={setIsOpen}></Modal> :null}
                        <input type='text' placeholder='Buscar...' onChange={(e)=>setInputSearch(e.target.value)}/>
                        <img src={imgSearch} alt="" />
                    </form>
                </div>
            </StyledContainer>
        </StyledHeader>
    )
}