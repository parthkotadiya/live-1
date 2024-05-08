import { useMemo, useState } from "react";
import FOOTER from "./footer";
import HEADER from "./header";
import { useNavigate } from "react-router-dom";
import React from "react";

function SHOP() {
    const navigate = useNavigate()
    const [id, setId] = useState();
    console.log(id);

    const Id = (item) => {
        setId(parseInt(item.id));
        navigate("/home")
        localStorage.setItem("productid", JSON.stringify(item.id))
    };

    const [products, setProducts] = useState([])
    const [value, setValue] = useState({})
    const [datas] = useState([localStorage.setItem("live", JSON.stringify(value))])
    const add = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
        datas.push(value)
    }

    useMemo(() => {
        fetch('http://localhost:3001/products')
            .then(response => response.json())
            .then(data => {
                // Process the retrieved JSON data
                setProducts(data);
            })
    }, [])
    console.log(products);
    const grid = () => {
        document.getElementById("demo53").style.display = 'none'
        document.getElementById("demo52").style.display = 'block'

    }
    const list = () => {
        document.getElementById("demo52").style.display = 'none'

        document.getElementById("demo53").style.display = 'block'

    }
    const p1 = () => {
        const sortedProducts = [...products].sort((a, b) => a.value - b.value);
        setProducts(sortedProducts);
    }

    const p2 = () => {
        const sortedProducts = [...products].sort((a, b) => b.value - a.value);
        setProducts(sortedProducts);

    }
    const ring = () => {
        const ringProducts = products.filter(item => item.type === "ring");
        setProducts(ringProducts)
    }

    const diamond = () => {
        const dia = products.filter(item => item.type === "diamond");
        setProducts(dia)
    }
    return (
        <>
            <HEADER />
            <div className="text-center bg-red-400 p-12">
                <div>
                    <h1 className="text-4xl"><b>Shop</b></h1>
                    <h1>Home  -  Shop</h1>
                </div>
            </div>
            <br />
            <div className="container-lg bg-yellow-400 p-4 flex justify-around gap-5">
                <div className="flex justify-between gap-5">
                    <button type="button" onClick={grid} ><img src="https://cdn-icons-png.flaticon.com/128/3603/3603178.png" width={50} height={50} /></button>
                    <button type="button" onClick={list} ><img src="https://cdn-icons-png.flaticon.com/128/151/151917.png" width={50} height={50} /></button>
                </div>
                <div>
                    <div className="dropdown">
                        <button type="button" classname="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            sorting
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#" onClick={p1}>price low to high</a>
                            <a className="dropdown-item" href="#" onClick={p2} >price high to low</a>
                            <a className="dropdown-item" href="#" onClick={ring} >rings</a>
                            <a className="dropdown-item" href="#" onClick={diamond} >diamonds</a>


                        </div>
                    </div>
                </div>

            </div>

            <div className="container" id="demo52" >
                <br />
                <ul className="flex justify-center gap-20 flex-wrap text-center  "  >
                    {products.map(item => (
                        <li key={item.id} className="demo31" onClick={() => Id(item)} >
                            {item.id}
                            <img src={item.image} width={300} height={200} />
                            <strong>{item.name}</strong>
                            <br />
                            {item.dis}
                            <br />
                            {item.value}
                            <br />
                            <button type='button' name="value" onClick={(e) => add(e)} value={78} className='demo32' >Add to Cart</button>

                        </li>
                    ))}
                </ul>
            </div>

            <div className="container demo53" id="demo53">
                <br />
                <ul className="flex justify-center gap-20 flex-wrap text-center  "  >
                    {products.map(item => (
                        <li key={item.id} onClick={() => Id(item)} >
                            <div className="flex justify-center gap-10 demo31 p-5" >
                                <div>

                                    <img src={item.image} width={300} height={200} />
                                </div>
                                <div className="text-start">
                                    <strong>{item.name}</strong>

                                    <br />
                                    {item.dis}
                                    <br />
                                    <div className="flex justify-start">
                                        <p className="w-[600px]">  {item.pg}</p>
                                    </div>
                                    <br />
                                    {item.value}
                                    <br />
                                    <button type='button' name="value" onClick={(e) => add(e)} value={78} className='demo32' >Add to Cart</button>

                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>




            <FOOTER />
        </>
    )
}
export default SHOP;