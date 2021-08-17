const { success, fail } = require("../../config/response");
const { Join_class, MyClass } = require("../../models");


exports.createJC = async(req, res) => {
    try {
        const data = await Join_class.create(req.body);
        res.json(success({ msg: " berhasil mengikuti kelas", data }));
    } catch (error) {
        res.json(fail({ msg: error.message }));
    }
};

exports.getJC = async({ auth }, res) => {
    try {
        const data = await Join_class.findAll({
            where: { userId: auth.id },

            include: [{
                model: MyClass,
                attributes: ["id", "code", "description", "name"],
            }]
        });
        res.json(success({ msg: "data berhasil din terima", data }));
    } catch (error) {
        res.json(fail({ msg: error.message }));
    }
}