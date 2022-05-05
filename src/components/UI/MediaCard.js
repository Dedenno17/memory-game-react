const MediaCard = (props) => {
  const classes = `rounded-lg shadow-lg bg-primaryGreen ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

export default MediaCard;
