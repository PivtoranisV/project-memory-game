import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';

import UserInput from './components/UserInput/UserInput';
import GamePage from './pages/GamePage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'setup', element: <UserInput /> },
      { path: 'game', element: <GamePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
