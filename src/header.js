import { useNavigate } from "react-router-dom";
import HOME2 from './H/home-2';

function HEADER() {
    const navigate = useNavigate()
    return (
        <>
            <div className="container demo1">
                <h1>Free Shipping For All Products</h1>
                <div className="demo2">
                    <a href="/my acc" className="demo3">My Account</a>
                    <a href="/cart" className="demo3">Cart</a>
                    <a href="/wishlist" className="demo3">Wishlist</a>
                    <a href="/checkout" className="demo3">Checkout</a>
                </div>

            </div>
            <hr/>
            <div style={{ height: "80px" }} className="demo4">
                <img src="http://corano.mallthemes.com/wp-content/uploads/2019/07/logo_corano.png" width="100px" height="30px" />
                <div className="demo5">
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle demo3" data-toggle="dropdown">
                            Home
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item demo3" onClick={()=>navigate("/")} >Home shop 1</a>
                            <a class="dropdown-item demo3" onClick={()=>navigate("/H/home-2")} >Home shop 2</a>
                            <a class="dropdown-item demo3 " onClick={()=>navigate("/H/home-3")}>Home shop 3</a>
                            <a class="dropdown-item demo3" onClick={()=>navigate("/H/home-4")}>Home shop 4</a>

                        </div>
                    </div>

                    <div class="dropdown">
                        <a href="#" onClick={()=>navigate("/shop")} class="dropdown-toggle demo3" data-toggle="dropdown">
                            Shop
                        </a>
                        <div class="dropdown-menu">
                            <h4 className="text-center">Product Types</h4>
                            <hr />
                            <a class="dropdown-item demo3" onClick={()=>navigate("/G/g")}> Grouped Product</a>
                            <a class="dropdown-item demo3" onClick={()=>navigate("/G/v")}> Variable Product</a>
                            <a class="dropdown-item demo3" onClick={()=>navigate("/G/s")}> simple Product</a>
                            <a class="dropdown-item demo3" onClick={()=>navigate("/G/e")}> External Product</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <a href="#" onClick={()=>navigate("/bg")} class="dropdown-toggle demo3" data-toggle="dropdown">
                            Blog
                        </a>
                        <div class="dropdown-menu">
                            <h4 className="text-center">Post Formats</h4>
                            <hr />
                            <a class="dropdown-item demo3" onClick={()=>navigate("/blog/image")}> image Formats</a>
                            <a class="dropdown-item demo3" onClick={()=>navigate("/blog/galary")}> Galary Formats</a>
                            <a class="dropdown-item demo3" onClick={()=>navigate("/blog/audio")}> Audio Formats</a>
                            <a class="dropdown-item demo3" onClick={()=>navigate("/blog/video")}> Video Formats</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle demo3" data-toggle="dropdown">
                            Pages
                        </a>
                        <div class="dropdown-menu">
                           
                            <a class="dropdown-item demo3" href="/about">About Us</a>

                        </div>
                    </div>

                </div>
                <div>
                    <input type="search" placeholder='Search' className="border-2 border-black rounded-[20px] text-center h-[44px] " />
                </div>
                <div className="demo5">
                    <img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" width="30px" height="30px" />
                    <img src="https://cdn-icons-png.flaticon.com/128/6874/6874008.png" width="30px" height="30px" />
                    <img src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png" width="30px" height="30px" />

                </div>

            </div>
        </>
    )
}
export default HEADER;