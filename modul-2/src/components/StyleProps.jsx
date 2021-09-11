const StyleProps = (props) => {
  return (
    <div
      style={{
        maxWidth: '20rem',
        borderRadius: '5px',
        background: 'lightblue',
        margin: '1rem 0',
        padding: '1rem 0.8rem',
      }}
    >
      {props.children}
    </div>
  );
};

export default StyleProps;
