import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import router from './router';

function App() {
  return (
    <>
      <RouterProvider router={router} /> <ToastContainer />
    </>
  );
}

export default App;
