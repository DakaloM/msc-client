import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Post from "./pages/post/Post";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";

function App() {

  const user = true;

  const Layout = () => {
    return (
      <div style={{display: "flex", flexDirection: "column", minHeight: "100vh", justifyContent: "space-between"}}>

        <Navbar />
        <Outlet />
        <Footer />

      </div>
    )
  }

  const ProtectedRoutes = ({children}) => {
      if(user !== true) {
        <Navigate to="/"/>
      }
      return children
  }

  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        {path: "/", element:<Home />},
        {path: "/home", element:<Home />},
        {path: "/blog", element:<Blog />},
        {path: "/blog/:id", element:<Post />},
        {path: "/about", element:<About />},
        {path: "/services", element:<Services />},
        {path: "/contact", element:<Contact />},
      ],


    },

    
  ])



  return (
    <div className="App theme-light light" style={{
      
    }}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
