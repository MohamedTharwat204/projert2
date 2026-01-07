import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
    const url = 'https://fakestoreapi.com/products'
    const [valeu, setvaleu] = useState([])
    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                let data = res.data;
                console.log(data)
                setvaleu(data)
            })
            .catch()
    }, [])


    return (
        <div className=" bg-white w-full h-auto text-black flex flex-col items-center gap-6 py-6">

            <h1 className=" text-4xl font-bold"> SHPEN STOR MOAHME</h1>

            <div className=" grid grid-cols-3  gap-4 ">

                {valeu.map((el) => {
                    return (
                        <div key={el.id} className="card bg-base-100 w-96 shadow-sm text-white">
                            <figure>
                                <img className="h-50 object-cover p-3" src={el.image} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Title is : {el.title}</h2>
                                <p>preis is : {el.price}$</p>
                                <div className="card-actions justify-end">
                                    <Link to={'/Shop/NewShop/'+el.id} className="btn btn-primary">Show More</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}
