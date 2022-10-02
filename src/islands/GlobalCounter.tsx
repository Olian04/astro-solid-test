import { createSignal } from 'solid-js';

const [count, setCount] = createSignal(0);

export default () => {
  return (
    <div>
      <button onclick={() => setCount(count() - 1)}>-</button>
      <span>{count()}</span>
      <button onclick={() => setCount(count() + 1)}>+</button>
    </div>
  );
};
