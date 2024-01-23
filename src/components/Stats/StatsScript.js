const statsScript = `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f92e0e48311f635665d2de225751a349";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
`;
export default function StatsScript() {
  return <script dangerouslySetInnerHTML={{ __html: statsScript }}></script>;
}
