import React from 'react';

export default (props) => {
  return (
    <svg 
      className={props.className}
      height={props.size}
      style={props.style}
      viewBox="0 0 284 284"
      width={props.size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={props.classNameBottom}
        d="M283.55 283.545H.45V.455h31.99v251.11l251.11-.01z"
      />
      <path
        className={props.classNameTop}
        d="M283.55 180.785V.455H103.22v31.99h148.34v148.34z"
      />
    </svg>
  );
};