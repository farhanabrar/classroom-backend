const jwt = require("jsonwebtoken");
const { fail } = require("../config/response");

exports.checkToken = (req, res, next) => {
    const token = req.get("Auth-token");
    if(!token) res.json(fail ({msg: "unauthorized "}));
    jwt.verify(token, "shiftacademy",(err,decode) => {
        if(err) res.json(fail({msg: "invalid token"}));
        else {
            req.auth = decode.user;
            next();
        }
    });
};