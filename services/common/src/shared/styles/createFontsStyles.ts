const createFontsStyles = (prefix = "."): string => `
@font-face {
  font-family: "ProximaNova";
  src: url(${prefix}/ProximaNova/ProximaNova.woff) format('woff'), 
    url(${prefix}/ProximaNova/ProximaNova.ttf) format('truetype'), 
    url(${prefix}/ProximaNova/ProximaNova.eot) format('embedded-opentype');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: "ProximaNova";
  src: 
    url(${prefix}/ProximaNova/ProximaNova-B.woff) format('woff'), 
    url(${prefix}/ProximaNova/ProximaNova-B.ttf) format('truetype'), 
    url(${prefix}/ProximaNova/ProximaNova-B.eot) format('embedded-opentype');
  font-weight: bold;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: "ProximaNova";
  src: url(${prefix}/ProximaNova/ProximaNova-I.woff) format('woff'), 
    url(${prefix}/ProximaNova/ProximaNova-I.ttf) format('truetype'), 
    url(${prefix}/ProximaNova/ProximaNova-I.eot) format('embedded-opentype');
  font-weight: normal;
  font-style: italic;
  font-display: block;
}

@font-face {
  font-family: "ProximaNova";
  src: url(${prefix}/ProximaNova/ProximaNova-BI.woff) format('woff'), 
    url(${prefix}/ProximaNova/ProximaNova-BI.ttf) format('truetype'), 
    url(${prefix}/ProximaNova/ProximaNova-BI.eot) format('embedded-opentype');
  font-weight: bold;
  font-style: italic;
  font-display: block;
}
`;

export default createFontsStyles;
