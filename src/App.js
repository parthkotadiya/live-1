import logo from './logo.svg';
import './App.css';
import HEADER from './header';
import FOOTER from './footer';

function App() {
  return (
    <>
      <HEADER />

      <div>
        <div id="demo" class="carousel slide" data-ride="carousel">


          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='demo14 '>
                <div className='container demo17'>
                  <div>
                    <h1 className='text-4xl'>Family Jewelery</h1>

                    <h1 className='text-4xl'>Collection</h1>
                    <br />
                    <p>
                      Designer Jewelery Necklaces-Bracelets-Earings
                    </p>
                    <br />
                    <button type='button' className='text-white demo18' >Shop now</button>
                  </div>
                </div>
              </div>

            </div>
            <div class="carousel-item">
              <div className='demo15'>
                <div className='demo19'>

                  <h1 className='text-4xl'>Diamonds jewelery</h1>
                  <h1 className='text-4xl'>Collection</h1>
                  <br />
                  <p>
                    Shukra Yogam & Silver Power Silver Saving Schemes
                  </p>
                  <br />
                  <button type='button' className='text-white demo18' >Shop now</button>
                </div>

              </div>

            </div>
            <div class="carousel-item">
              <div className='demo16'>
                <div className='container demo17'>
                  <div>
                    <h1 className='text-4xl'>Grace Designer</h1>

                    <h1 className='text-4xl'>jewelery</h1>
                    <br />
                    <p>
                      Rings,Occasion Pieces,Pandora & More
                    </p>
                    <br />
                    <button type='button' className='text-white demo18' >Shop now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a class="carousel-control-prev demo12" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon demo13 p-2"></span>
          </a>
          <a class="carousel-control-next demo12" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon demo13 p-2 "></span>
          </a>
        </div>

      </div>
      <br />
      <div className='container-lg'>
        <hr />
        <br />

        <div className='flex justify-center'>

          <div className='flex justify-center'>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/128/7893/7893962.png' width={50} height={50} />
            </div>
            <div>
              <h1><b>Free Shipping</b></h1>
              <br />
              <p>Free Shipping On All US Order Or Order Above $200</p>
            </div>


          </div>

          <div className='flex justify-center'>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/128/2652/2652170.png' width={50} height={50} />
            </div>
            <div>
              <h1><b>Support 24/7</b></h1>
              <br />
              <p>Contact Us 24 Hours A Day, 7 Days A Week</p>
            </div>


          </div>

          <div className='flex justify-center'>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/128/2268/2268439.png' width={50} height={50} />
            </div>
            <div>
              <h1><b>30 Days Return</b></h1>
              <br />
              <p>Simply Return It Within 30 Days For An Exchange</p>
            </div>


          </div>

          <div className='flex justify-center'>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/128/9409/9409781.png' width={50} height={50} />
            </div>
            <div>
              <h1><b>100% Payment Secure</b></h1>
              <p>
                We Ensure Secure Payment With PEV</p>
            </div>


          </div>

        </div>
        <br />
        <br />
        <div className='flex justify-between'>
          <div className='demo20'>
            <div className='m-10 text-end'>
              <p>BEAUTIFUL</p>
              <h1 className='text-4xl'>Wedding </h1>
              <h1 className='text-4xl'>Rings </h1>
              <br />
              <a href='#' className='demo22'>Shop Now</a>
            </div>


          </div>
          <div className='demo21'>
            <div className='m-10 text-center '>
              <p>EARRING</p>
              <h1 className='text-4xl'>Tangerine Floral </h1>
              <h1 className='text-4xl'>Earring </h1>
              <br />
              <a href='#' className='demo22'>Shop Now</a>
            </div>

          </div>
        </div>
        <br />
        <div className='flex justify-between'>
          <div className='demo23'>
            <div className='m-10 text-end'>
              <p>BEAUTIFUL</p>
              <h1 className='text-4xl'>Wedding </h1>
              <h1 className='text-4xl'>Rings </h1>
              <br />
              <a href='#' className='demo22'>Shop Now</a>
            </div>


          </div>
          <div className='demo24'>
            <div className='m-10 text-center '>
              <p>EARRING</p>
              <h1 className='text-4xl'>Tangerine Floral </h1>
              <h1 className='text-4xl'>Earring </h1>
              <br />
              <a href='#' className='demo22'>Shop Now</a>
            </div>

          </div>
        </div>
        <br />
        <div className='text-center'>
          <h1 className='text-4xl'>New Arrivals</h1>
          <h1>Add new arrivals to weekly lineup</h1>

        </div>

      </div>
      <br />
      <div className='flex justify-around'>
        <a href='/shop' className='demo25 '>
          <div>
            <h1>EARRINGS</h1>

            <h1 className='demo29'>15 Items</h1>
          </div>
        </a>
        <a href='/shop' className='demo26 '>
          <div>
            <h1>EARRINGS</h1>

            <h1 className='demo29'>15 Items</h1>
          </div>
        </a>
        <a href='/shop' className='demo27 '>
          <div>
            <h1>EARRINGS</h1>

            <h1 className='demo29'>15 Items</h1>
          </div>
        </a>
        <a href='/shop' className='demo28 '>
          <div>
            <h1>EARRINGS</h1>

            <h1 className='demo29'>15 Items</h1>
          </div>
        </a>

      </div>
      <br />
      <div className='container-lg flex justify-center gap-5'>
        <div className='text-center'>
          <div className='demo31'>
            <button type='button' className='demo32' >Add to Cart</button>
          </div>
          <br />
          <h1>Rugs,Wall Decor</h1>
          <h1 className='demo22'>Carat Solitaire Diamond</h1>
          <h1>$ 78.00</h1>
        </div>
        <div className='text-center'>
          <div className='demo33'>
            <button type='button' className='demo32' >Add to Cart</button>

          </div>
          <br />
          <h1>Brooches,Candles,Wall Decor</h1>
          <h1 className='demo22'>Pearl-Shaped Black</h1>
          <h1>$ 60.00- $100.00</h1>


        </div>

        <div className='text-center'>
          <div className='demo34'>
            <button type='button' className='demo32' >Add to Cart</button>

          </div>
          <br />
          <h1>Candles,Wall Decor</h1>
          <h1 className='demo22'>The World Jewelery</h1>
          <h1>$115.00</h1>


        </div>


        <div className='text-center'>
          <div className='demo35'>
            <button type='button' className='demo32' >Add to Cart</button>

          </div>
          <br />
          <h1>Candles,Wall Decor</h1>
          <h1 className='demo22'>Women's Falla Earrings</h1>
          <h1>$60.00</h1>
        </div>



      </div>
      <br />
      <br />
      <div className='container-lg flex justify-center gap-5'>
        <div className='text-center'>
          <div className='demo36'>
            <button type='button' className='demo32' >Add to Cart</button>
          </div>
          <br />
          <h1>Candles,Wall Decor</h1>
          <h1 className='demo22'>Women's Falla Earrings</h1>
          <h1>$60.00</h1>
        </div>



        <div className='text-center'>
          <div className='demo37'>
            <button type='button' className='demo32' >Add to Cart</button>
          </div>
          <br />
          <h1>Candles,Wall Decor</h1>
          <h1 className='demo22'>Women's Falla Earrings</h1>
          <h1>$60.00</h1>
        </div>


        <div className='text-center'>
          <div className='demo38'>
            <button type='button' className='demo32' >Add to Cart</button>
          </div>
          <br />
          <h1>Candles,Wall Decor</h1>
          <h1 className='demo22'>Women's Falla Earrings</h1>
          <h1>$60.00</h1>
        </div>


        <div className='text-center'>
          <div className='demo39'>
            <button type='button' className='demo32' >Add to Cart</button>
          </div>
          <br />
          <h1>Candles,Wall Decor</h1>
          <h1 className='demo22'>Women's Falla Earrings</h1>
          <h1>$60.00</h1>
        </div>



      </div>
      <br />
      <div className='bg-sky-100'>
        <div id="demoo" class="carousel slide text-center" data-ride="carousel">
          <h1 className='text-4xl'>Client Testimonials</h1>
          <h1>What they say</h1>
          <br />

          <ul class="carousel-indicators">
            <li data-target="#demoo" data-slide-to="0" class="active"></li>
            <li data-target="#demoo" data-slide-to="1"></li>
            <li data-target="#demoo" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active ">
              <div className='flex justify-center'>
                <div >
                  <img src="http://corano.mallthemes.com/wp-content/uploads/2018/04/testimonial3-150x150.jpg" className='rounded-circle' width={100} height={100} />

                </div>
              </div>
              <br />
              <div className='flex justify-center '>
                <p className='w-[930px]'>
                  All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !
                </p>
              </div>
              <br />
              <h1><span class="name">Kathy Young</span></h1>
              <br />
            </div>
            <div class="carousel-item">
              <div className='flex justify-center'>

                <img src="http://corano.mallthemes.com/wp-content/uploads/2018/04/testimonial1-150x150.jpg" className='rounded-circle' width={100} height={100} />
              </div>
              <br />
              <div className='flex justify-center '>
                <p className='w-[930px]'>
                  All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !
                </p>
              </div>
              <br />
              <h1><span class="name">Kathy Young</span></h1>
              <br />
            </div>
            <div class="carousel-item">
              <div className='flex justify-center'>

                <img src="http://corano.mallthemes.com/wp-content/uploads/2018/04/testimonial2-150x150.jpg" className='rounded-circle' width={100} height={100} />
              </div>
              <br />
              <div className='flex justify-center '>
                <p className='w-[930px]'>
                  All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !
                </p>
              </div>
              <br />
              <h1><span class="name">Kathy Young</span></h1>
              <br />
            </div>
          </div>

          <a class="carousel-control-prev" href="#demoo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demoo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>


      </div>
      <br />
      <br />
      <div className='container flex justify-center gap-4'>
        <div className='demo40'>
          <div className='text-center'>
            <h1>Beautiful</h1>
            <h1 className='text-4xl'>Wedding Rings</h1>
            <br />
            <a href='#' className='demo22'>Shop Now</a>

          </div>

        </div>
        <div className='flex justify-center gap-10'>
          <div>
            <h1 className='text-xl'>Featured Products</h1>
            <div className='flex justify-center gap-2'>
              <img src='http://corano.mallthemes.com/wp-content/uploads/2018/11/9.jpg' width={100} height={100} />
              <div>
                <p href="#" className='w-[100px]'>Carat Solitaire Diamond</p>
                <br />
                <h1>$78.00</h1>

              </div>
            </div>
            <br />

            <div className='flex justify-center gap-2'>
              <img src='http://corano.mallthemes.com/wp-content/uploads/2018/11/15.jpg' width={100} height={100} />
              <div>
                <p href="#" className='w-[100px]'>Diamond Band Ring</p>
                <br />
                <h1>$86.00</h1>

              </div>
            </div>
            <br />
            <div className='flex justify-center gap-2'>
              <img src='	http://corano.mallthemes.com/wp-content/uploads/2018/11/7.jpg' width={100} height={100} />
              <div>
                <p href="#" className='w-[100px]'>Carat Solitaire Diamond</p>
                <br />
                <h1>$78.00</h1>

              </div>
            </div>
            <br />
            <div className='flex justify-center gap-2'>
              <img src='http://corano.mallthemes.com/wp-content/uploads/2018/11/2.jpg' width={100} height={100} />
              <div>
                <p href="#" className='w-[100px]'>Carat Solitaire Diamond</p>
                <br />
                <h1>$78.00</h1>

              </div>
            </div>
            <br />

          </div>
          <div>
            <h1 className='text-xl'>Best Sellers</h1>
            <div className='flex justify-center gap-2'>
              <img src='http://corano.mallthemes.com/wp-content/uploads/2018/11/9.jpg' width={100} height={100} />
              <div>
                <p href="#" className='w-[100px]'>Carat Solitaire Diamond</p>
                <br />
                <h1>$78.00</h1>

              </div>
            </div>
            <br />

            <div className='flex justify-center gap-2'>
              <img src='http://corano.mallthemes.com/wp-content/uploads/2018/11/15.jpg' width={100} height={100} />
              <div>
                <p href="#" className='w-[100px]'>Diamond Band Ring</p>
                <br />
                <h1>$86.00</h1>

              </div>
            </div>
            <br />
            <div className='flex justify-center gap-2'>
              <img src='	http://corano.mallthemes.com/wp-content/uploads/2018/11/7.jpg' width={100} height={100} />
              <div>
                <p href="#" className='w-[100px]'>Carat Solitaire Diamond</p>
                <br />
                <h1>$78.00</h1>

              </div>
            </div>
            <br />
            <div className='flex justify-center gap-2'>
              <img src='http://corano.mallthemes.com/wp-content/uploads/2018/11/2.jpg' width={100} height={100} />
              <div>
                <p href="#" className='w-[100px]'>Carat Solitaire Diamond</p>
                <br />
                <h1>$78.00</h1>

              </div>
            </div>
            <br />


          </div>


        </div>
      </div >
      <br />
      <h1 className='text-4xl text-center'>From Our Blog</h1>
      <br />
      <h1 className='text-center'>There are latest blog posts</h1>
      <div className='container-lg flex justify-center gap-5'>
        <div>
          <img src='http://corano.mallthemes.com/wp-content/uploads/2018/04/blog2-1110x700.jpg' width={335} height={211} />
          <br/>

          <h1> By Admin / April 25, 2018</h1>
          <br/>
          <h1 className='text-xl'>Quisque egestas</h1>
        </div>

        <div>
          <img src='http://corano.mallthemes.com/wp-content/uploads/2018/04/blog3-1110x700.jpg' width={335} height={211} />
          <br/>

          <h1> By Admin / April 25, 2018</h1>
          <br/>
          <h1 className='text-xl'>Quisque egestas</h1>
        </div>

        <div>
          <img src='http://corano.mallthemes.com/wp-content/uploads/2018/04/blog4-1110x700.jpg' width={335} height={211} />
          <br/>

          <h1> By Admin / April 25, 2018</h1>
          <br/>
          <h1 className='text-xl'>Quisque egestas</h1>
        </div>
      </div>



      <FOOTER />
    </>
  );
}

export default App;
