import { useMemo, useState } from "react";
import FOOTER from "./footer";
import HEADER from "./header";
import Image from './blog/image';

function SHOP() {
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

    return (
        <>
            <HEADER />
            <div className="text-center bg-red-400 p-12">
                <div>
                    <h1 className="text-4xl"><b>Shop</b></h1>
                    <h1>Home  -  Shop</h1>
                </div>
            </div>
            <div className='container-lg flex justify-center gap-5'>
                <div className='text-center'>
                    <div className='demo31'  >
                        <button type='button' name="value" onClick={(e) => add(e)} value={78} className='demo32' >Add to Cart</button>
                    </div>
                    <br />
                    <div>
                        <ul>
                            {products.map(item => (
                                <li key={item.id}>
                                    <strong>{item.name}</strong> 
                                    {item.dis}
                                    { <img src={item.image} /> }
                                </li>
                            ))}
                        </ul>
                    </div>



                </div>
                <div className='text-center'>
                    <div className='demo33'>
                        <button type='button' name="value" onClick={(e) => add(e)} value={79} className='demo32' >Add to Cart</button>

                    </div>
                    <br />
                    <h1>{products[1]?.name}</h1>
                    <h1 className='demo22'>{products[1]?.dis}</h1>
                    <h1> $ {products[1]?.value}</h1>


                </div>

                <div className='text-center'>
                    <div className='demo34'>
                        <button type='button' name="value" onClick={(e) => add(e)} value={80} className='demo32' >Add to Cart</button>

                    </div>
                    <br />
                    <h1>product 3</h1>
                    <h1 className='demo22'>Diamond Jewelery 3</h1>
                    <h1>$ 78.00</h1>


                </div>


                <div className='text-center'>
                    <div className='demo35'>
                        <button type='button' name="value" onClick={(e) => add(e)} value={81} className='demo32' >Add to Cart</button>

                    </div>
                    <br />
                    <h1>product 4</h1>
                    <h1 className='demo22'>Diamond Jewelery 4</h1>
                    <h1>$ 78.00</h1>
                </div>



            </div>
            <br />
            <br />
            <div className='container-lg flex justify-center gap-5'>
                <div className='text-center'>
                    <div className='demo36'>
                        <button type='button' name="value" onClick={(e) => add(e)} value={82} className='demo32' >Add to Cart</button>
                    </div>
                    <br />
                    <h1>product 5</h1>
                    <h1 className='demo22'>Diamond Jewelery 5</h1>
                    <h1>$ 78.00</h1>
                </div>



                <div className='text-center'>
                    <div className='demo37'>
                        <button type='button' name="value" onClick={(e) => add(e)} value={83} className='demo32' >Add to Cart</button>
                    </div>
                    <br />
                    <h1>product 6</h1>
                    <h1 className='demo22'>Diamond Jewelery 6</h1>
                    <h1>$ 78.00</h1>
                </div>


                <div className='text-center'>
                    <div className='demo38'>
                        <button type='button' name="value" onClick={(e) => add(e)} value={84} className='demo32' >Add to Cart</button>
                    </div>
                    <br />
                    <h1>product 7</h1>
                    <h1 className='demo22'>Diamond Jewelery 7</h1>
                    <h1>$ 78.00</h1>
                </div>


                <div className='text-center'>
                    <div className='demo39'>
                        <button type='button' name="value" onClick={(e) => add(e)} value={85} className='demo32' >Add to Cart</button>
                    </div>
                    <br />
                    <h1>product 8</h1>
                    <h1 className='demo22'>Diamond Jewelery 8</h1>
                    <h1>$ 78.00</h1>
                </div>




            </div>
           
            <FOOTER />
        </>
    )
}
export default SHOP;