const { success, fail } = require("../../config/response");
const { MyClass, Join_class, User, Schedule, Materials } = require("../../models");
const { Op } = require("sequelize");
const { query } = require("express-validator");

exports.getClass = async({ query }, res) => {
    const where = {};
    const whereSchedule = {};
    const whereUser = {};
    try {
        if (query.id) where.id = query.id;
        if (query.schedule_id) whereSchedule.id = query.schedule_id;
        if (query.user_id) whereUser.id = query.user_id;

        const data = await MyClass.findAll({
            where: where,
            attributes: ["id", "name", "description"],
            include: [{
                model: Join_class,
                attributes: ["id", "userId", "role"],
                include: {
                    where: whereUser,
                    model: User,
                    attributes: ["id", "name", "email"],
                },
            }],
        });
        res.json(success({ msg: "data kelas berhasil di terima ", data }));
    } catch (error) {
        res.json(fail({ msg: error.message }));
    }

};

exports.getAllClass = async(req, res) => {
    try {
        const data = await MyClass.findAll({
            attributes: ["id", "name", "description"],
            include: [{
                    model: Schedule,
                    include: {
                        model: Materials,
                    }
                },
                {
                    model: Join_class,
                    attributes: ["id", "userId", "role"],
                }
            ],
        });
        res.json(success({ msg: "data kelas berhasil di terima ", data }));
    } catch (error) {
        res.json(fail({ msg: error.message }));
    }
}

exports.createClass = async(req, res) => {
    try {
        const data = await MyClass.create(req.body);
        res.json(success({ msg: "data kelas berhasil di tambah", data }));
    } catch (error) {
        res.json(fail({ msg: error.message }));
    }
};

exports.updateClass = async({ body }, res) => {
    if (!body.id) res.json(fail({ msg: "data tidak di temukan" }));
    try {
        const payload = body;
        const data = await MyClass.update(payload, {
            where: {
                id: body.id,
            }
        });
        if (data) res.json(success({ msg: "data kelas berhasil di ubah", data }));
        else res.json(fail({ msg: "data kelas gagal diupdate" }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};

exports.deleteClass = async({ body }, res) => {
    if (!body.id) res.json(fail({ msg: "data tidak di temukan" }));
    try {
        const data = await MyClass.destroy({
            where: {
                id: body.id,
            },
        });
        if (data) res.json(success({ msg: "data berhasil di delete", data }));
        else res.json(fail({ msg: "data kelas gagal di hapus" }));
    } catch (error) {
        res.json(fail({ msg: error }));

    }
};