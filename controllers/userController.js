const { User } = require("../models");
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize")
const config = require("../config/database");

module.exports = {
  // display view register with form
  create: (_req, res) => res.render("auth/register"),

  // store user in db, v1
  store: async (req, res) => {
    const connection = new Sequelize(config);
    const {
      name,
      email,
      cpf,
      phone,
      password,
      address,
      cep,
      complemento,
      city,
      state,
      zone,
      role
    } = req.body;
    console.log('from userController: ', name );
    const hashPassword = bcrypt.hashSync(password, 10);
    // const userRegisterData = {
    //   name,
    //   email,
    //   cpf,
    //   phone,
    //   password: hashPassword,
    //   address,
    //   cep,
    //   complemento,
    //   city,
    //   state,
    //   zone,
    //   created_at: new Date(),
    //   updated_at: new Date(),
    //   role: 'client',
    // };
    
    // return  User.create(userRegisterData)
    //             .then(users => {
    //               if(users) {
    //                 res.render("auth/register", {
    //                   message: "Usuário adicionado com sucesso."
    //                 })
    //               } else {
    //                 res.status(400).render("aut/register", {
    //                   message: "Erro ao cadastrar usuário."
    //                 })
    //               }
    //             })
  },

}