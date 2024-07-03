function ComponentB(props) {
  return (
    <div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

export default ComponentB;
