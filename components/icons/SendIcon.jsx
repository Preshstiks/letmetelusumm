import React from "react";

const SendIcon = ({ props }) => {
  return (
    <svg
      {...props}
      className="cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6035 12.2312C22.7022 9.56567 9.66259 3.29755 8.43442 4.54167C7.04169 5.95247 10.3715 10.1448 11.1215 11.4797C11.5725 12.2825 11.5602 12.6307 11.0473 13.4326C8.72483 17.0644 7.57272 18.8739 8.28872 19.6561C9.43003 20.9029 22.5072 14.8326 22.6035 12.2312Z"
        stroke="black"
        stroke-width="1.5"
      />
      <path
        d="M11.4107 12.172H15.5355"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SendIcon;
