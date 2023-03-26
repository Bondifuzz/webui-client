export default function newURL(url) {
  return /(\/projects\/[^/]+)\/(integrations|fuzzers)/g.exec(url)[1];
}
