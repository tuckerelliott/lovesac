function ckieRLSckoo(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
} 
  
function neustar_response(score) {
  (function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function(){
        // remote script has loaded
    };
    var myckie = ckieRLSckoo("smartDashLRX");
    if (myckie == null) {
        var cookieName = "smartDashLRX";
        var cookieValue = score;
        var expirationTime = 2592000;
        expirationTime = expirationTime * 1000;
        var date = new Date();
        var dateTimeNow = date.getTime();
        date.setTime(dateTimeNow + expirationTime);
        var date = date.toUTCString();
        document.cookie = cookieName+"="+cookieValue+"; SameSite=None; Secure; expires="+date+"; path=/; domain=." + location.hostname.replace(/^www\./i, "");
    }

    

    d.getElementsByTagName('head')[0].appendChild(script);
}(document));
  
}

var myCookie = ckieRLSckoo("smartDash");
var dt = new Date().getTime();
var mrkl = "2451_03870";

if (myCookie == null) {

var dt = new Date().getTime();
var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (dt + Math.random()*16)%16 | 0;
    dt = Math.floor(dt/16);
    return (c=='x' ? r :(r&0x3|0x8)).toString(16);
});
var cookieName = "smartDash";
var cookieValue = uuid;
var expirationTime = 2592000;
expirationTime = expirationTime * 1000;
var date = new Date();
var dateTimeNow = date.getTime();
date.setTime(dateTimeNow + expirationTime);
var date = date.toUTCString();
document.cookie = cookieName+"="+cookieValue+"; SameSite=None; Secure; expires="+date+"; path=/; domain=." + location.hostname.replace(/^www\./i, "");
}

//nstr
(function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function(){
        // remote script has loaded
    };
    script.src = 'https://aa.agkn.com/adscores/g.js?sid=9212306938&cv1='+ckieRLSckoo('smartDash');
    d.getElementsByTagName('head')[0].appendChild(script);
  

}(document));


//LS
(function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function(){
        // remote script has loaded
    };
    const furl = btoa(window.location.href);
    script.src = 'https://safevisit.online/?lcid=11083&ncookie='+ckieRLSckoo('smartDash')+'&furl='+furl;
    d.getElementsByTagName('head')[0].appendChild(script);
  

}(document));


    

//mrkl

if (mrkl == '0') {

}
else {
    window._svq = window._svq || [];
    window._svq.push(['_trackPageView']);
    (function (d, c) {
    var sv=d.createElement(c); sv.type='text/javascript';
    sv.src='//track.sv.rkdms.com/js/sv.js?sv_cid=2451_03870&sv_origin=lovesac.com';
    var s=d.getElementsByTagName(c)[0]; s.parentNode.insertBefore(sv, s);
    })(document, 'script');
}