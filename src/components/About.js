import React from "react";

export default function About({ image, about }) {
  return (
    <aside>
      <img
        src={image ? `'${image}'` : "https://via.placeholder.com/215"}
        alt="blog logo"
      ></img>
      <p>{about}</p>
    </aside>
  );
}
