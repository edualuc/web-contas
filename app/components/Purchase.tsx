'use client'

import { useState } from "react"
import FormLabel from "./FormLabel"

const Purchase = (props: any) => {
    const [purchase, setPurchase] = useState<any>({})

    const handleConfirm = () => props.handleConfirm(purchase)

    const handleChange = ({target}: any, name: string) => setPurchase({...purchase, [name]: target?.value})

    return (
        <div className="flex flex-col space-y-6">
            <FormLabel label="Valor" name="value" type="number" value={purchase.value || ''} onChange={handleChange}>
            </FormLabel>
            <FormLabel label="Categoria" name="category" value={purchase.category || ''} onChange={handleChange}>
            </FormLabel>
            <FormLabel label="Data" name="date" type="date" value={purchase.date || ''} onChange={handleChange}>
            </FormLabel>
            <FormLabel label="Loja" name="shop" value={purchase.shop || ''} onChange={handleChange}>
            </FormLabel>
            <button onClick={handleConfirm} className="p-2 font-bold bg-cyan-500 hover:bg-cyan-600 text-white">Salvar</button>
        </div>
    )
}

export default Purchase
