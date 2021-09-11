const isAuthenticated = true;

const ConditionalRendering = () => {
  // Cara 1
  if (isAuthenticated) {
    return <h4>Hello, User!</h4>;
  } else {
    return <h4>Hello strangers!</h4>;
  }

  // Cara 2
  // let message;
  // if (isAuthenticated) {
  //   message = <h4>Hello, User!</h4>;
  // } else {
  //   message = <h4>Hello strangers!</h4>;
  // }

  // Cara 3
  // return isAuthenticated ? <h4>Hello, User!</h4> : <h4>Hello strangers!</h4>;

  // Cara 4
  // return (
  //   <div>
  //     <p>Status</p>
  //     {isAuthenticated ? <h4>Logged in!</h4> : <h4>Unknown</h4>}
  //   </div>
  // );
};

export default ConditionalRendering;
