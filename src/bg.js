import { useNavigate } from "react-router-dom";
import FOOTER from "./footer";
import HEADER from "./header";

function BLOG() {
    const navigate=useNavigate()
    return (
        <>
            <HEADER />
            <div className="p-12 bg-red-400 text-center">
                <h1 className="text-4xl">blog</h1>
                <br />
                <h1>Home>Blog</h1>

            </div>
            <br />
            <br />
            <div className="container-lg">
                <div className="flex justify-center gap-5">
                    <div>
                        <img src="http://corano.mallthemes.com/wp-content/uploads/2018/04/blog8-700x418.jpg" width={450} height={250} />
                    </div>
                    <div>
                        <h1 className="text-4xl">Blog Image Post (Sticky)</h1>
                        <br />
                        <h1>By admin / Date April 22, 2018</h1>
                        <br/>
                        <p className="w-[460px]">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.</p>
                        <br/>
                        <button type="button" className="demo50" onClick={()=>navigate("/blog/image")} >Read More</button>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center gap-5">
                    <div>
                        <img src="http://corano.mallthemes.com/wp-content/uploads/2018/04/blog2-700x418.jpg" width={450} height={250} />
                    </div>
                    <div>
                        <h1 className="text-4xl">Blog Image Post (Sticky)</h1>
                        <br />
                        <h1>By admin / Date April 22, 2018</h1>
                        <br/>
                        <p className="w-[460px]">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.</p>
                        <br/>
                        <button type="button" className="demo50" onClick={()=>navigate("/blog/galary")} >Read More</button>
                    </div>
                </div>

                <br/>
                <div className="flex justify-center gap-5">
                    <div>
                        <img src="http://corano.mallthemes.com/wp-content/uploads/2018/04/blog3-700x418.jpg" width={450} height={250} />
                    </div>
                    <div>
                        <h1 className="text-4xl">Blog Image Post (Sticky)</h1>
                        <br />
                        <h1>By admin / Date April 22, 2018</h1>
                        <br/>
                        <p className="w-[460px]">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.</p>
                        <br/>
                        <button type="button" className="demo50" onClick={()=>navigate("/blog/audio")} >Read More</button>
                    </div>
                </div>

                <br/>
                <div className="flex justify-center gap-5">
                    <div>
                        <img src="http://corano.mallthemes.com/wp-content/uploads/2018/04/blog4-700x418.jpg" width={450} height={250} />
                    </div>
                    <div>
                        <h1 className="text-4xl">Blog Image Post (Sticky)</h1>
                        <br />
                        <h1>By admin / Date April 22, 2018</h1>
                        <br/>
                        <p className="w-[460px]">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.</p>
                        <br/>
                        <button type="button" className="demo50" onClick={()=>navigate("/blog/video")} >Read More</button>
                    </div>
                </div>

                <br/>
                <div className="flex justify-center gap-5">
                    <div>
                        <img src="http://corano.mallthemes.com/wp-content/uploads/2018/04/blog5-700x418.jpg" width={450} height={250} />
                    </div>
                    <div>
                        <h1 className="text-4xl">Blog Image Post (Sticky)</h1>
                        <br />
                        <h1>By admin / Date April 22, 2018</h1>
                        <br/>
                        <p className="w-[460px]">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.</p>
                        <br/>
                        <button type="button" className="demo50" onClick={()=>navigate("/blog/image")} >Read More</button>
                    </div>
                </div>

            </div>
            <FOOTER />
        </>
    )
}
export default BLOG;