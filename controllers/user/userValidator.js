const { body,  validationResult } = require ("express-validator");
const {fail} = require("../../config/response");
const {User} = require("../../models");

exports.runValidation = (req, res, next ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.json(fail({ msg: errors.array()[0].msg}));
    }
    next(); 
};

exports.postValidator = [
    body("name", "nama tidak boleh kosong").notEmpty(),
    body("email")
    .isEmail()
    .withMessage("email harus benar")
    .custom((value) => {
        return User.findOne({ where: {email: value}}).then(user => {
          if (user) {
            return Promise.reject('E-mail already in use');
          }
        });
      }),
      body("password").custom((value, { req}) => {
        if (value !== req.body.passwordConfirmation) {
            throw new Error('Password confirmation is incorrect');
            
          }
          return true;
      }),
];
