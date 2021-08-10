const { success, fail }= require("../../config/response");
const { 
    User, 
    Join_class, 
    MyClass,
    Schedule, 
    Sequelize: {Op}, 
} = require("../../models");
const {genSaltSync, hashSync} = require ("bcrypt");

exports.getAllUser = async (req,res) => {
   
    try{
        const data = await User.findAll({
            attributes: {exclude: ["password"]},
            include: [{ 
                model: Join_class, 
                attributes: ["id", "userId"], 
                include: {
                    model: MyClass, 
                    attributes: ["id", "code","description", "name" ],  
                    // include: {
                    //     model: Join_class,
                    //     attributes: ["id", "userId"],
                    //     include: {
                    //         model: User,
                    //         attributes: ["id", "name", "email"],
                    //     },
                    // }
                }
            }
        ],   
        }); 
        res.json(success({msg:"data user berhasil di terima ", data}));
    }catch (error) {
        res.json(fail({ msg: error.message }));

    }
    
};


exports.getUser = async ({query, auth},res) => {
    // res.json(auth);
    let offset = 0;
    let limit = 5;
    let order = [["name","DESC"]];
    
    if (parseInt(query.limit)> 0) limit = parseInt(query.limit);
    if (parseInt(query.page) > 0) offset = (parseInt(query.page) - 1) * limit;
    if(query.order)order = [[query.order, "DESC"]];
    try{
        const data = await User.findOne({ where: {id:auth.id},
            attributes: {exclude: ['password']},
            order,
            include: [{ 
                model: Join_class, 
                attributes: ["id", "userId", "role" ], 
                include: {
                    model: MyClass, 
                    attributes: ["id", "code", "description", "name",  ], 
                   
                }
            }
        ],   
        }); 
        res.json(success({msg:"data user berhasil di terima ", data}));
    }catch (error) {
        res.json(fail({ msg: error.message }));

    }
};

exports.createUser = async (req, res) => {
    try {
        const passwordUser = req.body.password;
        const salt = genSaltSync(10);
        const password = hashSync(passwordUser, salt);
        req.body.password = password;
        const data = await User.create(req.body);
        res.json(success ({msg: "data user berhasil di tambah", data}));
    } catch (error) {
        res.json(fail({ msg: error }));
    }   
};

exports.updateUser = async ({ body }, res ) => {
    if(!body.id) res.json(fail({msg : "data tidak di temukan"}));
    try {
        const payload = body;
        const data = await User.update(payload, {
            where: {
              id: body.id,
            }
          });
          if (data) res.json(success({ msg: "data user berhasil di ubah", data}));        
          else res.json(fail({msg: "data user gagal diupdate"}));
        }catch(error){
        res.json(fail({ msg: error }));
    }
};

exports.deleteUser = async ({ body }, res) => {
    if(!body.id) res.json(fail({msg : "data tidak di temukan"}));
    try {
        const data = await User.destroy({
            where: {
                id: body.id,
              },
        });
        if (data) res.json(success({msg: "data berhasil di delete", data})) ;   
        else res.json(fail({msg: "data user gagal di hapus"}));
    } catch (error) {
        res.json(fail({ msg: error}));
        
    }
}