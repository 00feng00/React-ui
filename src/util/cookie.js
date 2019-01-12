import Cookie from 'js-cookie'

export function getCookie(key) {
    return Cookie.get(key)
}

export function setCookie(key, value) {
    if (value) {
        Cookie.set(key, value, {expires: 7});
    }
}
export  function  clearCookie() {
    Object.keys(Cookie.get()).forEach(function(cookieName) {
        var neededAttributes = {
        };
        Cookie.remove(cookieName, neededAttributes);
    });
}