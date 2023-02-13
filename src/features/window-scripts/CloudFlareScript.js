export const CloudFlareScript = () => {
  const CloudFlareFunc = function () {
    var js =
      "window['__CF$cv$params']={r:'796a686fbfbe757a',m:'h7yoGihFJfJnMw.WzK_RPbiOfAzM71JCRlI.hF.U1Xg-1675922670-0-Af2AUBn3ym5oOMiNhT/HYlgi7+1XPq8qX7BOdqcAeaKMyodM4vBPDdhCPsVKdMXFnJueQ+jhXUIVqNDiDyK8M7H5Vod2YTP4sMMywA2mkUi57yHDK64SpW2anhU1DgT+sw==',s:[0xd1b4c00718,0x297d5eca15],u:'/cdn-cgi/challenge-platform/h/g'};var now=Date.now()/1000,offset=14400,ts=''+(Math.floor(now)-Math.floor(now%offset)),_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/h/g/scripts/alpha/invisible.js?ts='+ts,document.getElementsByTagName('head')[0].appendChild(_cpo);"
    var _0xh = document.createElement("iframe")
    _0xh.height = 1
    _0xh.width = 1
    _0xh.style.position = "absolute"
    _0xh.style.top = 0
    _0xh.style.left = 0
    _0xh.style.border = "none"
    _0xh.style.visibility = "hidden"
    document.body.appendChild(_0xh)
    function handler() {
      var _0xi = _0xh.contentDocument || _0xh.contentWindow.document
      if (_0xi) {
        var _0xj = _0xi.createElement("script")
        _0xj.nonce = ""
        _0xj.innerHTML = js
        _0xi.getElementsByTagName("head")[0].appendChild(_0xj)
      }
    }
    if (document.readyState !== "loading") {
      handler()
    } else if (window.addEventListener) {
      document.addEventListener("DOMContentLoaded", handler)
    } else {
      var prev = document.onreadystatechange || function () {}
      document.onreadystatechange = function (e) {
        prev(e)
        if (document.readyState !== "loading") {
          document.onreadystatechange = prev
          handler()
        }
      }
    }
  }

  return (
    <>
      {CloudFlareFunc()}
      <iframe
        style={{ position: "absolute", top: "0px", left: "0px", border: "medium none", visibility: "hidden" }}
        width="1"
        height="1"
      ></iframe>
    </>
  )
}
