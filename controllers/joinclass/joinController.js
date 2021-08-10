const { success, fail } = require("../../config/response");
const { Join_class } = require("../../models");


exports.createJC = async(req, res) => {
    try {
        const data = await Join_class.create(req.body);
        res.json(success({ msg: " berhasil mengikuti kelas", data }));
    } catch (error) {
        res.json(fail({ msg: error.message }));
    }
};