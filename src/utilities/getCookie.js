export default function getCookie(name) {
  let match = document.cookie.match(RegExp("(?:^|;\\s*)" + name + "=([^;]*)"));
  return match ? match[1] : null;
}
