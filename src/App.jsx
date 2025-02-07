import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import GlobalStyle from "./globalStyles";
import ProductList from './pages/ProductListPage'
import Product from "./pages/ProductPage";
import { loader } from "./pages/ProductPage";
import { ProductProvider } from "./contexts/contexts";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path:'/products',
        element:<ProductList />
      },
      {
        path: '/products/:id',
        element: <Product />,
        loader: loader
      },
    ]
  }
])

function App() {

  return (
    <>
      <GlobalStyle />
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </>
  )
}

export default App
