function Myinput(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your text"
        onChange={props.change}
      />
    </div>
  );
}

export default Myinput;
