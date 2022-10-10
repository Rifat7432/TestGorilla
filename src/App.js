import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Topics from './Components/Topics/Topics';
import Quizs from './Components/Quizs/Quizs';

function App() {
  const router = createBrowserRouter([
    {
      path :'/',
      element :<Main></Main>,
      children :[
        {
          path:'/',
          loader : async() =>{
             return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Topics></Topics>
        },
        {
          path:'topics/:id',
          loader : async({params}) =>{
             return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element:<Quizs></Quizs>
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
