const EventHandling = () => {
  const handleClick = (event) => {
    console.log('Button clicked', event);
  };

  const handleClickWithParams = (message) => {
    alert(message);
  };

  return (
    <div>
      <p>Without params</p>
      <button onClick={handleClick}>Click me!</button>
      <p>With params</p>
      <button onClick={() => handleClickWithParams('Hi')}>Click me!</button>
    </div>
  );
};

export default EventHandling;
