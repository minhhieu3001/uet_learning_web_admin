export const handleTime = (time) => {
  const date = new Date(time);
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
};
