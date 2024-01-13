import  React from 'react';
import jokesData from './jokesData';
import Joke from  './components/Joke'


function App() {
 
const jokeElements = jokesData.map(function (joke){
return <Joke
 setup = {joke.setup}
punchline = {joke.punchline}

/>  

})


   
   return(
    <div>
      {jokeElements}
    </div>

  
   );
}

export default App;
