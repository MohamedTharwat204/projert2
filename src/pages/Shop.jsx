import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

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
    const [ree, setree] = useState(false)

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
                                    <Link className="btn btn-primary" onClick={
                                        () => {
                                            setree(true)
                                        }
                                    } >Show More</Link>
                                     <Link to={'/Shop/NewShop/'+el.id} className="btn btn-success" >Add To  Card</Link>
                                </div>
                            </div>
                            {ree === true ?
                                (<div className=' bg-gray-600/80 h-dvh fixed w-full  items-center  justify-center  flex top-0 left-0 '>
                                    <div className="w-1/3 h-auto bg-white text-black shadow rounded p-2 flex flex-col gap-3">
                                        <h1>Title is : {el.title}</h1>
                                        <img className='w-75 h-50 object-cover' src={el.image} alt="" />
                                        <h1>preis is : {el.price}</h1>
                                        <p>Description is : {el.description}</p>
                                        <div className=" flex justify-center mb-2">
                                            <button className='btn btn-primary ' onClick={
                                                () => {
                                                    setree(false)
                                                }
                                            }>cloes</button>
                                        </div>
                                    </div>
                                </div>) : (null)}
                        </div>

                    )
                })
                }
            </div>

            
            

        </div>
    )
}
