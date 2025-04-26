import { createBrowserRouter } from 'react-router';
import Root from './pages/Root/Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router