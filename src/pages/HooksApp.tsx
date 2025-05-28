// import { CounterApp } from '../01-useState/CounterApp';
import { CounterWithCustomHook } from '../01-useState/CounterWithCustomHook';
const HooksApp = () => {
  return (
    <>
        <h1>Hooks App</h1>
        <hr />
        {/* <CounterApp start={80} min={75} max={83} step={0.5}/> */}
        {/* <CounterApp/> */}
        <CounterWithCustomHook/>
    </>
  )
}

export default HooksApp;
