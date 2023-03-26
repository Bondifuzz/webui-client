export default function convertStringToDateTime(str) {
  let date = new Date(str);
  const format = (val) => {
    return val < 10 ? `0${val}` : val;
  };

  return `${format(Number(date.getHours()))}:${format(
    Number(date.getMinutes())
  )}:${format(Number(date.getSeconds()))} ${format(
    Number(date.getDate())
  )}-${format(Number(date.getMonth()) + 1)}-${date.getFullYear()}`;
}
