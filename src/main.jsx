import ReactDOM from "react-dom/client"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetails from "./pages/Productdetails.jsx"
import Cart from "./pages/Cart.jsx"

import productsLoader from "./productsLoaders.js"

import "./style/main.sass" 


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      { path: "", element: <Home />, loader: productsLoader, hydrateFallbackElement: <p>Loading...</p> },
      { path: "shop", element: <Shop />, loader: productsLoader, hydrateFallbackElement: <p>Loading...</p>  },
      { path: "productDetails/:id", element: <ProductDetails />, loader: productsLoader, hydrateFallbackElement: <p>Loading...</p>  },
      { path: "/cart", element: <Cart />, loader: productsLoader, hydrateFallbackElement: <p>Loading...</p>}

      
    ]
  },
]);


const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
)
