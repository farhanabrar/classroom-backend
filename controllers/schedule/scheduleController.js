const { success, fail } = require("../../config/response");
const { Schedule, Join_class, MyClass, Materials } = require("../../models");
const { Op } = require("sequelize");


exports.getSchedule = async({ query }, res) => {
    try {
        const where = {};
        if (query.class_id) where.class_id = query.class_id;
        const data = await Schedule.findAll({
            where: where,
            include: [{
                    model: MyClass,
                    attributes: ['name'],
                },
                {
                    model: Materials,
                    attributes: ['id', 'name', 'file'],
                }
            ]
        });
        res.json(success({ msg: "data schedule berhasil di terima ", data }));
    } catch (error) {
        res.json(fail({ msg: error.message }));

    }

};

exports.createSchedule = async(req, res) => {
    try {
        const data = await Schedule.create(req.body);
        res.json(success({ msg: "data schedule berhasil di tambah", data }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};

exports.updateSchedule = async({ body }, res) => {
    if (!body.id) res.json(fail({ msg: "data tidak di temukan" }));
    try {
        const payload = body;
        const data = await Schedule.update(payload, {
            where: {
                id: body.id,
            }
        });
        if (data) res.json(success({ msg: "data Schedule berhasil di ubah", data }));
        else res.json(fail({ msg: "data Schedule gagal diupdate" }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};

exports.deleteSchedule = async({ body }, res) => {
    if (!body.id) res.json(fail({ msg: "data tidak di temukan" }));
    try {
        const data = await Schedule.destroy({
            where: {
                id: body.id,
            },
        });
        if (data) res.json(success({ msg: "data berhasil di delete", data }));
        else res.json(fail({ msg: "data Schedule gagal di hapus" }));
    } catch (error) {
        res.json(fail({ msg: error }));

    }
};