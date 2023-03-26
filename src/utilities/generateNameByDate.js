export default function generateNameByDate() {
  let date = new Date();
  const format = (val) => {
    return val < 10 ? `0${val}` : val;
  };

  return `${format(Number(date.getHours()))}-${format(
    Number(date.getMinutes())
  )}-${format(Number(date.getDate()))}-${format(
    Number(date.getMonth()) + 1
  )}-${date.getFullYear()}`;
}
