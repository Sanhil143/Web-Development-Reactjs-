import './App.css';
import { FunctionalComponent } from './components/FunctionalComponent';
import { ClassComponent } from './components/ClassComponent';
import PractiseJsx from './jsx/PractiseJsx';
import ParentComponent from './props/ParentComponent';
import Usestate from './hooks/Usestate';
import Useeffect from './hooks/Useeffect';
import CounterForContext from './components/CounterForContext';
import CounterContext from './contexts/CounterContext';
import { useContext } from 'react';

function App() {

  // return (
  //   <>
  //     {/* <FunctionalComponent /> */}
  //     {/* <ClassComponent/> */}
  //     {/* <PractiseJsx/> */} 
  //     {/* <ParentComponent/> */}
  //     {/* <Usestate/> */}
  //     {/* <Useeffect/> */}
      
  //   </>
  // )

  const counterState = useContext(CounterContext)
  return (
    <>
     <h3>Count is {counterState.count}</h3>
      <CounterForContext/>
       <CounterForContext/>
       <CounterForContext/>
      <CounterForContext/>
    </>
  )
}

export default App;


//