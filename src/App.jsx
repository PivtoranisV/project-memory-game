import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import DisneyPage from './pages/DisneyPage';
import HomePage from './pages/HomePage';

import { loader as disneyLoader } from './util/loader';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'game1', element: <DisneyPage />, loader: disneyLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
