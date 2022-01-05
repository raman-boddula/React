import { useParams } from "react-router-dom";
export const UserDetails = () => {
    const { userid } = useParams();
    return (
        <>Fetched the data of {userid}</>
    )
}