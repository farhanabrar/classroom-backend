const { success, fail } = require("../../config/response");
const {
    Schedule,
    Materials,
    MyClass,
    Sequelize: { Op },
} = require("../../models");
const { query } = require("express-validator");

exports.getMaterial = async ({ query }, res) => {
    const where = {};
    try {
        if (query.schedule_id) {where.schedule_id = query.schedule_id}
        const data = await Materials.findAll({
            where: where,
            attributes: ['id', 'name', 'file'],
            include: [{
                model: Schedule,
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                include: [{
                    model: MyClass,
                    attributes: ["name"]
                }]
            }
            ],
        });
        res.json(success({ msg: "data Materi berhasil di terima ", data }));
    } 
    catch (error) {
        res.json(fail({ msg: "data tidak ditemukan" }));

    }

};

exports.createMaterial = async (req, res) => {
    try {
        const data = await Materials.create(req.body);
        res.json(success({ msg: "data Materi berhasil di tambah", data }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};

exports.updateMaterial = async ({ body }, res) => {
    if (!body.id) res.json(fail({ msg: "data tidak di temukan" }));
    try {
        const payload = body;
        const data = await Materials.update(payload, {
            where: {
                id: body.id,
            }
        });
        if (data) res.json(success({ msg: "data materi berhasil di ubah", data }));
        else res.json(fail({ msg: "data materi gagal diupdate" }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};

exports.deleteMaterial = async ({ body }, res) => {
    if (!body.id) res.json(fail({ msg: "data tidak di temukan" }));
    try {
        const data = await Materials.destroy({
            where: {
                id: body.id,
            },
        });
        if (data) res.json(success({ msg: "data materi di delete", data }));
        else res.json(fail({ msg: "data materi gagal di hapus" }));
    } catch (error) {
        res.json(fail({ msg: error }));

    }
}