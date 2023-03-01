const jwt = require("jsonwebtoken");

const secret = "mysecretssshhhhhhh";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ request: req, contextValue }) {
    const header =
      req.http.headers.get("authorization") ||
      req.http.headers.get("Authorization");
    let token = req.http.body.token || header;

    if (header) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return false;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      if (data) {
        req.user = data;
      }
      //console.log("REQ", req);
      console.log(req.user)
      return req;
    } catch (err) {
      console.log(err);
      console.log("Invalid token");
    }

    return false;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
