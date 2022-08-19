export default function map() {
  (function () {
    var setting = {
      height: 583,
      width: 728,
      zoom: 17,
      queryString:
        "Cristo Redentor - Alto da Boa Vista, Rio de Janeiro - RJ, Brasil",
      place_id: "ChIJP6FKmNV_mQAR3gKVAdeEyZ0",
      satellite: true,
      centerCoord: [-5.733785797557296, -35.23034748280335],
      cid: "0x9dc984d7019502de",
      lang: "pt",
      cityUrl: "/brazil/natal-18514",
      cityAnchorText: "",
      id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
      embed_id: "798439",
    };
    var d = document;
    var s = d.createElement("script");
    s.src = "https://1map.com/js/script-for-user.js?embed_id=798439";
    s.async = true;
    s.onload = function (e) {
      window.OneMap.initMap(setting);
    };
    var to = d.getElementsByTagName("script")[0];
    to.parentNode.insertBefore(s, to);
  })();
}
