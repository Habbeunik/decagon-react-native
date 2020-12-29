export const mergeStyle = (...styles: { [key: string]: number | string }[]) => {
  return styles.reduce((accStyle, style) => ({ ...accStyle, ...style }), {});
};
