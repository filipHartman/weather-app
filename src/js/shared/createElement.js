export const createElement = ({
  tag,
  id = '',
  className = '',
  children = [],
}) => {
  const element = document.createElement(tag);
  if (!!id) element.id = id;
  if (!!className) element.className = className;
  children.forEach((child) => element.appendChild(child));
  return element;
};
