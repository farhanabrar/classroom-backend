const { success, fail } = require("../../config/response");
const { MyClass, Join_class, User, Schedule, Materials } = require("../../models");
const { Op } = require("sequelize");
const { query } = require("express-validator");

exports.getClass = async({ query, auth }, res) => {
    const where = {};

    try {
        if (query.id) where.id = query.id;
        const data = await MyClass.findAll({
            where: where,
            attributes: ["id", "name", "description"],
            include: [{
                model: Join_class,
                attributes: ["id", "userId", "role"],
                include: {
                    where: { id: auth.id },
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