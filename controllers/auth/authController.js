const { success, fail } = require("../../config/response");
const {
    User,
    Join_class,
    MyClass,
} = require("../../models");
const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

exports.login = async({ body }, res) => {
    try {
        const user = await User.findOne({
            where: { email: body.email },
        });
        const validUser = compareSync(body.password, user.password);
        if (validUser) {

            return res.json(success({ data: responseWithJWT(user) }));
        } else {
            return res.json(fail({ msg: "email dan password tidak cocok" }));
        }
    } catch (error) {
        return res.json(fail({ msg: error.message }));

    }
};

const responseWithJWT = (user) => {
    delete user.dataValues.password;
    const response = {
        ...user.dataValues,
        token: sign({ user }, "shiftacademy"),
    };
    return response;
};