import HEADER from "../header";
import FOOTER from "../footer";

function Audio(){
    return    (
        <>
        <HEADER />
        <div className="p-12 bg-red-400 text-center">
            <h1 className="text-4xl">Blog</h1>
            <br />
            <h1>Home >aigrette>Blog image post (sticky)</h1>

        </div>
        <div className="container-lg">
            <h1 className="text-4xl">Blog Image Post (Sticky)</h1>
            <br />
            <h1>By admin / Date April 22, 2018</h1>
            <img src="http://corano.mallthemes.com/wp-content/uploads/2018/04/blog6-1092x873.jpg" width={825} height={648} />
            <br />
            <br />
            <p>Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec
                suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit
                metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at
                risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.</p>
            <br />
            <p>Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec
                suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit
                metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at
                risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.
            </p>
            <br />
            <hr />
            <br />
            <div className='container-lg flex justify-center gap-5'>
                <div>
                    <img src='http://corano.mallthemes.com/wp-content/uploads/2018/04/blog2-1110x700.jpg' width={335} height={211} />
                    <br />

                    <h1> By Admin / April 25, 2018</h1>
                    <br />
                    <h1 className='text-xl'>Quisque egestas</h1>
                </div>

                <div>
                    <img src='http://corano.mallthemes.com/wp-content/uploads/2018/04/blog3-1110x700.jpg' width={335} height={211} />
                    <br />

                    <h1> By Admin / April 25, 2018</h1>
                    <br />
                    <h1 className='text-xl'>Quisque egestas</h1>
                </div>

                <div>
                    <img src='http://corano.mallthemes.com/wp-content/uploads/2018/04/blog4-1110x700.jpg' width={335} height={211} />
                    <br />

                    <h1> By Admin / April 25, 2018</h1>
                    <br />
                    <h1 className='text-xl'>Quisque egestas</h1>
                </div>
            </div>



        </div>


        <FOOTER />
    </>
    )
}
export default Audio