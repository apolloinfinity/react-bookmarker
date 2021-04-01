import React from 'react';

const Button = ({ btnStyle, btnText }) => {
  return (
    <div>
      <button className={`btn ${btnStyle}`}>{btnText}</button>
    </div>
  );
};

export default Button;
