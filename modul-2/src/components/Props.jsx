const Props = (props) => {
  console.log(props); // {name: 'Wisnu', hobby: 'code'}

  const name = props.name;
  const hobby = props.hobby;

  return <p>{`Hello, my name is ${name} and I love to ${hobby}`}</p>;
};

export default Props;
