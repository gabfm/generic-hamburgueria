import styled from "styled-components"

export const ModalConteiner = styled.div`
    position: fixed;

    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.3);
    flex-direction: column;
    

    section{
        position: relative;
        min-width: clamp(150px, 100%, 500px);
        margin: 2rem;
        background-color: #fff;
        height:555px ;

        div{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            
        }
        
    header {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        
        background-color: var(--color-color-primary);
        padding: 1.3rem 2.2rem;
        color: #FFFFFF;
        font-size: 1.8rem;
        font-weight: 700;
       
    }
    
    }

    .nameItemList{
        display:flex;
        align-items: center;
        font-size: 1.8rem;
        padding: 0 1rem;
        font-weight: 700;
       
    }

    ul{
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 0 2rem;
      
        height: 70%;
        overflow-x: auto;
    }
 

    .closeModal{
        width: 2.87px;
        height: 4.87px;
    
        color: rgba(255, 255, 255, 0.5); 
    }

    .removeAll {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
        width: 454px;      
        height: 60px;
        color: rgba(600, 255, 255, 01);

        background: #E0E0E0;

        border: 2px solid #E0E0E0;
        border-radius: 8px;
    }
`