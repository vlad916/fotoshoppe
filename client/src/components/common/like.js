import React from 'react';

// adding an product/item on a wishlist for future development
const Like = (props) => {
  const { liked, onLikeToggle } = props;
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      onClick={onLikeToggle}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
