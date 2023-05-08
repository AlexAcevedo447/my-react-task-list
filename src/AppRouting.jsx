import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Tasks from './routes/Tasks';
import AboutUs from './routes/AboutUs';
import App from './App';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Parece que estás buscando algo que aun no está disponible</h1>,
        children: [
            {
                path: "/",
                index: true,
                element: <Home />
            },
            {
                path: "/tasks",
                element: <Tasks />
            },
            {
                path: "/about_us",
                element: <AboutUs />
            }
        ]
    }
])

export default function () {

    return (
        <RouterProvider router={router} />
    )
}