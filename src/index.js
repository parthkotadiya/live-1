import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MYACC from './my acc';
import CART from './cart';
import WISH from './wishlist';
import CHECKOUT from './checkout';
import HOME from './home';
import BLOG from './bg';
import ABOUT from './about';
import SHOP from './shop';
import CONTACT from './contact';
import HEADER from './header';
import FOOTER from './footer';
import HOME2 from './H/home-2';
import HOME3 from './H/home-3';
import HOME4 from './H/home-4';
import GP from './G/g';
import VP from './G/v';
import SP from './G/s';
import EP from './G/e';
import Image from './blog/image';
import Video from './blog/video';
import Audio from './blog/audio';
import Galary from './blog/galary';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  [{
    path: "/my acc",
    element: <MYACC />
  },
  {
    path: "/",
    element: <App />

  },
  {
    path: "/cart",
    element: <CART />,
  },
  {
    path: "/wishlist",
    element: <WISH />
  },
  {
    path: "/checkout",
    element: <CHECKOUT />

  },
  {
    path: "/H/home-2",
    element: <HOME2 />

  }, {
    path: "/bg",
    element: <BLOG />

  }, {
    path: "/about",
    element: <ABOUT />

  }, {
    path: "/shop",
    element: <SHOP />

  }, {
    path: "/contact",
    element: <CONTACT />

  }
    , {
      path: "/header",
    element: <HEADER />

  }, {
    path: "/footer",
    element: <FOOTER />

  },
  {
    path: "/H/home-3",
    element: <HOME3 />

  },
  {
    path: "/H/home-4",
    element: <HOME4 />
  }
    , {
    path: "/G/g",
    element: <GP />

  }
    , {
    path: "/G/v",
    element: <VP />

  }
    , {
    path: "/G/s",
    element: <SP />

  }
    , {
    path: "/G/e",
    element: <EP />

  }
    , {
    path: "/blog/audio",
    element: <Audio />

  }
    , {
    path: "/blog/video",
    element: <Video />

  }
    , {
    path: "/blog/galary",
    element: <Galary />

  }
    , {
    path: "/blog/image",
    element: <Image />

  },
  {
    path: "/home",
    element: <HOME />
  }

  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
