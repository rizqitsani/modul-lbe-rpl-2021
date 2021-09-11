import React from 'react';

const NestedCreateElement = () => {
  return React.createElement(
    'div',
    {
      className: 'container',
      id: 'text-center',
    },
    React.createElement(
      'p',
      null,
      'This is created using nested createElement!!'
    )
  );
};

export default NestedCreateElement;
