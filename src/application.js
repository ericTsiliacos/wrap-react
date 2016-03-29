import {React} from './render'

export default function({count}) {
  return (
    <div>
      <h1>Current Count</h1>
      <p>{count}</p>
      <button id="increment">Increment</button>
      <button id="decrement">Decrement</button>
    </div>
  );
}
