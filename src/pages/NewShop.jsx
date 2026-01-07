import axios from "axios"
import { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom'

export default function NewShop() {
    const id = useParams()
    const [pro, setpr] = useState({});

    useEffect(() => {
        const idnew = id.pro;
        let url = `https://fakestoreapi.com/products/${idnew}`;
        axios
            .get(url)
            .then((res) => {
                let data = res.data;
                console.log(data)
                setpr(data)
            })
            .catch()
    }, [])
    return (
        <div className='flex flex-col gap-7 m-5'>
            <h1>Title is : {pro.title}</h1>
            <img className='w-75 h-50 object-cover' src={pro.image} alt="" />
            <h1>preis is : {pro.price}</h1>
            <p>Description is : {pro.description}</p>

        </div>
    )
}
