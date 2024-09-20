function FindProxyForURL(url, host) {
  const TOR_DOMAINS = new Array(
// instagram
    "instagram.com",
    "t.me",
    "telegram.org",
// twitter (x)
    "twitter.com",
    "x.com",
// linkedin
    "linkedin.com",
    "licdn.com",
// youtube + google
    "googlevideo.com",
  );

  const ZAPRET_DOMAINS = new Array(
// youtube + google
    "youtu.be",
    "youtube.com",
    ///"googlevideo.com",
    "google.com",
    "googleapis.com",
    "gstatic.com",
    "ytimg.com",
    "ggpht.com",
    "translate.google.com",
// rutracker
    "rutracker.org",
    "static.rutracker.cc",
// instagram
    "static.cdninstagram.com",
// other
    "flibusta.is",
    "medium.com",
    "torproject.org",
  );

  const escape_reg_exp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  var tor_proxy, zapret_proxy;

  tor_proxy = "SOCKS5 127.0.0.1:9050";
  zapret_proxy = "SOCKS5 127.0.0.1:1080";

  for(var i=0; i<TOR_DOMAINS.length; i++) {
    if (new RegExp(escape_reg_exp(TOR_DOMAINS[i]), 'i').test(host)) {
      //alert("url: '"+url+"' host: '"+host+"' in tor");
      return tor_proxy;
    }
  }

  for(var i=0; i<ZAPRET_DOMAINS.length; i++) {
    if (new RegExp(escape_reg_exp(ZAPRET_DOMAINS[i]), 'i').test(host)) {
      //alert("url: '"+url+"' host: '"+host+"' in zapret");
      return zapret_proxy;
    }
  }

  //alert("url: '"+url+"' host: '"+host+"' DIRECT");
  return "DIRECT";
}
