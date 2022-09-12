const PatriTable = require("../../Models/PatriTable");
const Controller = require("../Controller");
class Patrimonys {
  static async CreatePatrimony(req, res) {
    Controller.PatrimonyRoom();
    const { number_patrimony, type, status } = req.body;
    const { image, description } = req.body;
    const id_room = req.params.id;
    console.log(id_room);
    PatriTable.create({
      nPatrimony: number_patrimony,
      image: image,
      description: description,
      type: type,
      status: status,
      roomId: id_room,
    });
    // res.send(id_room)
    res.status(200).send("Patrimônio inserido");
  }
  static async SearchingPatrimony(req, res) {
    const { number_patrimony } = req.body;
    const data = await PatriTable.findAll({
      where: {
        nPatrimony: number_patrimony,
      },
    });
    res.send(data);
  }

  static async UpdatePatrimony(req, res) {
    const { old_number } = await req.body;
    const { new_number } = await req.body;
    console.log(new_number);
    const table = await PatriTable.update(
      { nPatrimony: new_number },
      {
        where: {
          nPatrimony: old_number,
        },
      }
    );
    res.status(200).send("Patrimônio atualizado!");
  }

  static async DeletePatrimony(req, res) {
    const { number_patrimony } = req.body;
    const table = await PatriTable.destroy({
      where: {
        nPatrimony: number_patrimony,
      },
    });
    res.status(200).send("Patrimôniio deletado!");
  }
}
module.exports = Patrimonys;
