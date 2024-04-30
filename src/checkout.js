import FOOTER from "./footer";
import HEADER from "./header";

function CHECKOUT() {
    return (
        <>
            <HEADER />
            <div className="bg-red-400 text-center p-12">
                <h1 className="text-4xl">Check out</h1>
                <br />
                <h1>Home> Check out</h1>


            </div>
            <br />
            <div className="m-5">
                <a className="demo50" href="/shop" > Return to Shop</a>
            </div>        <FOOTER />
        </>
    )
}
export default CHECKOUT;