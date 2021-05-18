import React from "react";

const LikeButton = () => {
  const [liked, setLike] = React.useState(false);

  // return React.createElement('div')
  return liked ?
    React.createElement(
      'button',
      { onClick: () => setLike(false) },
      'Liked'
    )
    :
    React.createElement(
      'button',
      { onClick: () => setLike(true) },
      'Like'
    );
};

export default LikeButton;