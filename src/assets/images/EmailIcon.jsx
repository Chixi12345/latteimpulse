import React from "react";

const EmailIcon = ({ fill }) => {
  return (
    <svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.0017 2.2C22.0017 0.99 21.0117 0 19.8017 0H2.20171C0.991709 0 0.00170898 0.99 0.00170898 2.2V15.4C0.00170898 16.61 0.991709 17.6 2.20171 17.6H19.8017C21.0117 17.6 22.0017 16.61 22.0017 15.4V2.2ZM19.8017 2.2L11.0017 7.7L2.20171 2.2H19.8017ZM19.8017 15.4H2.20171V4.4L11.0017 9.9L19.8017 4.4V15.4Z"
        fill={fill}
      />
    </svg>
  );
};

export default EmailIcon;
