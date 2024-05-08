import { useMemo, useState } from "react";
import FOOTER from "./footer";
import HEADER from "./header";
import { useNavigate } from "react-router-dom";

function HOME() {
    const navigate = useNavigate()
    const [Detail, setDetail] = useState([])
    console.log(Detail);

    const data = JSON.parse(localStorage.getItem("productid"));
    console.log(data);



    useMemo(() => {
        fetch('http://localhost:3001/products')
            .then(response => response.json())
            .then(data => {
                // Process the retrieved JSON data
                setDetail(data);
            })
    }, [])
    console.log(Detail);


    const addToCart = () => {

    }
    const [num, setNum] = useState()
    console.log(num);
    const fil = (e) => {
        setNum(e.target.name)
        let filterData = Detail.filter((value) => {
            if (parseInt(value.id) === parseInt(num))
                return (
                    localStorage.setItem("productid", JSON.stringify(value.id + parseInt(data)))
                )

        })



    }

    const wish = () => {
        localStorage.setItem("wishlist", JSON.stringify(data))
        navigate("/wishlist")
    }


    return (
        <>
            <HEADER />
            <div className="text-center bg-red-400 p-12">
                <h1 className="text-4xl">Product Details</h1>
                <br />
                <h1>Home - Shoe buckle - Wall Decor - Carat Solitaire Diamond</h1>
            </div>

            <br />

            <div className="flex justify-around container-lg gap-5">
                <div >
                    <img src={`${Detail[data]?.image}`} width='900px' height='900px' />
                    <br />
                    <div className="flex justify-center gap-5">
                        <img src={`${Detail[data + 1]?.image}`} width={100} height={100} name="1" onClick={(e) => fil(e)} />
                        <img src={`${Detail[data + 2]?.image}`} width={100} height={100} name="2" onClick={(e) => fil(e)} />
                        <img src={`${Detail[data + 3]?.image}`} width={100} height={100} name="3" onClick={(e) => fil(e)} />

                        


                    </div>
                </div>
                <div >
                    <h1 className="text-4xl"><b>{Detail[data]?.name}</b></h1>
                    <br />
                    <h1 className="text-xl"><b> $ {Detail[data]?.value}</b></h1>
                    <br />
                    <hr />
                    <br />
                    <p>
                        {Detail[data]?.pg}
                    </p>
                    <br />
                    <hr />
                    <br />
                    <div className="flex justify-around">
                        <input type="number" min={1} max={10} placeholder="1" className="border-2 border-black rounded text-center" />
                        <button onClick={() => addToCart()} className="bg-green-600 text-white font-bold py-2 px-4 rounded">Add to Cart</button>

                    </div>
                    <br />
                    <button type="button" onClick={() => wish()} className="bg-red-400 p-3 rounded" >Add To Wishlist</button>

                </div>

            </div>

            <br />

            <FOOTER />
        </>
    )
}
export default HOME;