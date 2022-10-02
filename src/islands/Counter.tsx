import { createSignal } from 'solid-js';

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <button onclick={() => setCount(count() - 1)}>-</button>
      <span>{count()}</span>
      <button onclick={() => setCount(count() + 1)}>+</button>
    </div>
  );
};
