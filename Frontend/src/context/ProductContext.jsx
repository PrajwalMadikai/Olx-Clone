import { createContext, useState } from "react";

export const ProductContext=createContext()

export default function  ProductProvider({children})
{
    let [carComponent,setCarComponent]=useState(false)

    const handleCarChange=()=>{
        setCarComponent(prev=>!prev)
    }

    return(
        <ProductContext.Provider  value={{carComponent,handleCarChange}} > 
        {children}
        </ProductContext.Provider>
    )
}