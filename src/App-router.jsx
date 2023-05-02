import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import PortalProvider from "./components/context/portalContext";


const routes = createBrowserRouter([
    {
        path: "",
        element: <PortalProvider><App /></PortalProvider>,
        errorElement: <h1>Parece que no existe lo que estás buscando</h1>
    }
])


export default function AppRouter() {
    return (
        <RouterProvider router={routes}>

        </RouterProvider>
    )
}