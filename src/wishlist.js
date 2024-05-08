import { useMemo, useState } from "react";
import FOOTER from "./footer";
import HEADER from "./header";

function WISH() {

    const wishi = JSON.parse(localStorage.getItem("wishlist"));

    const [wishlist, setWishlist] = useState([])
    useMemo(() => {
        fetch('http://localhost:3001/products')
            .then(response => response.json())
            .then(data => {
                // Process the retrieved JSON data
                setWishlist(data);
            })
    }, [])

    return (
        <>
            <HEADER />
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>PRODUCT NAME</th>
                            <th>PRICE</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><img src={wishlist[wishi]?.image} width={100} height={100} /></td>

                            <td>{wishlist[wishi]?.name}</td>
                            <td>{wishlist[wishi]?.value}</td>


                        </tr>
                    </tbody>
                </table>
            </div>

            <FOOTER />
        </>
    )
}
export default WISH;