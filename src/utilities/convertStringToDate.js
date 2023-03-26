export default function convertStringToDate(str) {
  let date = new Date(str);
  const format = (val) => {
    return val < 10 ? `0${val}` : val;
  };

  return `${format(Number(date.getDate()))}-${format(
    Number(date.getMonth()) + 1
  )}-${date.getFullYear()}`;
}
