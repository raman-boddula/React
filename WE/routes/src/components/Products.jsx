import { useParams } from 'react-router-dom';

export const Products = () => {
    const { name,id } = useParams();
    return (
        <>Product {name} id is {id}</>
    )

}