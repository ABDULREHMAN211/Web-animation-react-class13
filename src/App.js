import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';
import useWebAnimations, {backInLeft} from '@wellyshen/use-web-animations';

function App() {
  const {ref, playState} = useWebAnimations({...backInLeft});
  /* const {ref, playState, getAnimation} = useWebAnimations({
    keyframes: [
      {transform: "translate(0px)", background: "red"},
      {transform: "translate(500px)", background: "yellow"}
    ],
    timing: {
      duration: 3000,
      iterations: 4,
      direction: 'alternate',
      easing: "ease-in-out"
    },
    onUpdate: ({playState, animate, animation}) => {
      console.log("play State", playState)
      console.log("animate", animate)
      console.log("animation", animation)
    }
  });
  */
  return (
    <div>
      <div>Animation State {playState}</div>
      <div ref={ref} style={{backgroundColor: "red", width: "100px", height:"100px"}}>
        Our Creator is great.
      </div>
      
    </div>
  );
}

export default App;
