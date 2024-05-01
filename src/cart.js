import FOOTER from "./footer";
import HEADER from "./header";

function CART() {

    fetch('http://localhost:3001/products')
        .then(response => response.json())
        .then(data => {
            // Process the retrieved JSON data
            console.log(data); // Output the fetched data to the console
        })
    return (
        <>
            <HEADER />
            <div className="bg-red-400 text-center p-12">
                <h1 className="text-4xl">Cart</h1>
                <br />
                <h1>Home - Cart</h1>


            </div>

            <br />
            <div className="m-5">
                <a className="demo50" href="/shop" > Return to Shop</a>
            </div>
            <FOOTER />
        </>
    )
}
export default CART;