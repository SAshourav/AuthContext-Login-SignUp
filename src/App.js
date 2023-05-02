import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import { UserAuthContextProvider } from './Context/UserAuthContext';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/',
      element: <Login></Login>
    },
    {
      path: '/singup',
      element: <Signup></Signup>
    },
    {
      path: '/home',
      element: <ProtectedRoutes><Home></Home></ProtectedRoutes>  
    }
  ])
  return (
    <div className="App">
      <UserAuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
