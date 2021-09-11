const ChildrenProps = (props) => {
  return (
    <div
      style={{
        maxWidth: '20rem',
        borderRadius: '5px',
        background: 'lightblue',
        padding: '1rem 0.8rem',
      }}
    >
      {props.children}
    </div>
  );
};

export default ChildrenProps;
