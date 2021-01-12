"use strict";
exports.handler = (event, context, callback) => {
  //Get contents of response
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  //Set new headers
  headers["strict-transport-security"] = [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" }];
  headers["content-security-policy"] = [
    { key: "Content-Security-Policy", value: "default-src 'self' 'unsafe-inline' 'unsafe-eval' wss: https:" },
  ];
  headers["x-content-type-options"] = [{ key: "X-Content-Type-Options", value: "nosniff" }];
  headers["x-download-options"] = [{ key: "X-Download-Options", value: "noopen" }];
  headers["x-frame-options"] = [{ key: "X-Frame-Options", value: "SAMEORIGIN" }];
  headers["x-permitted-cross-domain-policies"] = [{ key: "X-Permitted-Cross-Domain-Policies", value: "none" }];
  headers["x-xss-protection"] = [{ key: "X-XSS-Protection", value: "1; mode=block" }];
  headers["referrer-policy"] = [{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }];

  //Return modified response
  callback(null, response);
};
