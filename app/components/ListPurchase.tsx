import Column from "./Column"

const ListPurchase =  (props: any) => {
    return (
        <ul className="flex flex-col space-y-6">
            {props.purchases?.map((purchase: any, index: number) => (
                <li key={index} className="flex flex-row w-full space-x-4">
                    <Column className="w-36">{purchase.value}</Column>
                    <Column className="w-36">{purchase.category}</Column>
                    <Column className="w-36">{purchase.date}</Column>
                    <Column className="w-36">{purchase.shop}</Column>
                    <button className="p-1 font-bold bg-cyan-500 hover:bg-cyan-600 text-white">x</button>
                </li>
            ))}
        </ul>
    )
}

export default ListPurchase
