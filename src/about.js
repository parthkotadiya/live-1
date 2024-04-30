import FOOTER from "./footer";
import HEADER from "./header";

function ABOUT() {
    return (
        <>
            <HEADER />
            <div className="bg-red-400 p-12 text-center ">
                <h1 className="text-4xl">About Us</h1>
                <br />
                <h1>Home> About Us</h1>
            </div>
            <br />
            <div className="container text-center">
                <img src="http://corano.mallthemes.com/wp-content/uploads/2018/11/about-us-banner1.jpg" width="100%" />
                <br />
                <h1 className="text-4xl">We Are A Digital Agency Focused On Delivering
                    <br />
                    Content And Utility User-Experiences.
                </h1>
                <br />
                <div className="flex justify-center">
                    <p className="w-[1050px]">
                        Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus. Imperdiet cursus odio tortor in elementum.
                        Egestas nunc eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit.
                        Pellentesque mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem consectetuer, sociosqu
                        phasellus risus urna aliquam, ornare.
                    </p>
                </div>
                <br />
                <div className="flex justify-center">
                    <img src="http://corano.mallthemes.com/wp-content/uploads/2018/11/about-us-signature.png" />
                </div>
                <br />
                <div className="demo51">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <img src="http://corano.mallthemes.com/wp-content/uploads/2018/11/about-us-policy1.png" width={50} height={50} />
                        </div>
                        <br />
                        <h1 className="text-2xl"><b>Creative Design</b></h1>
                        <p>
                            Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim
                        </p>


                    </div>
                    <div className="text-center">
                        <div className="flex justify-center">
                            <img src="http://corano.mallthemes.com/wp-content/uploads/2018/11/about-us-policy2.png" width={50} height={50} />
                        </div>                        <br />
                        <h1 className="text-2xl"><b>100% Money Back Guarantee</b></h1>
                        <p>
                            Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim
                        </p>


                    </div>
                    <div className="text-center">
                        <div className="flex justify-center">
                            <img src="http://corano.mallthemes.com/wp-content/uploads/2018/11/about-us-policy3.png" width={50} height={50} />
                        </div>                        <br />
                        <h1 className="text-2xl"><b>Online Support 24/7</b></h1>
                        <p>
                            Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim
                        </p>


                    </div>

                </div>
            </div>
            <FOOTER />
        </>
    )
}
export default ABOUT;