const getCookieByName = (cookieName: string, cookieString?: string): string => {
  if (!cookieString) {
    return "";
  }

  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(cookieString);

  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};

export default getCookieByName;
