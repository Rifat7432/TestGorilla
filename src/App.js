import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Topics from './Components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path :'/',
      element :<Main></Main>,
      children :[
        {
          path:'topics',
          loader : async() =>{
             return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Topics></Topics>
        }

      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
