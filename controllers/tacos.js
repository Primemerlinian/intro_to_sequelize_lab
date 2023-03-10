const { Taco, Sauce } = require("../models")


const create = async (req, res) => {
  try {
    const taco = await Taco.create(req.body)
    res.status(200).json(taco)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const tacos = await Taco.findAll({
      include: [{ 
        model: Sauce, 
        as: 'sauces' 
      }],
    })
    res.status(200).json(tacos)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const taco = await Taco.update(
      req.body,
      { where: { id: req.params.id }, returning: true }
    )
    res.status(200).json(taco)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteTaco = async (req, res) => {
  try {
    // Calling destroy on the model will not return the deleted record!
    const numberOfRowsRemoved = await Taco.destroy(
      { where: { id: req.params.id } }
    )
    res.status(200).json(numberOfRowsRemoved) // Expected: 1
  } catch (error) {
    res.status(500).json(error)
  }
}

const addSauce = async (req, res) => {
  try {
    req.body.tacoId = req.params.id
    const sauce = await Sauce.create(req.body)
    res.status(200).json(sauce)
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  create,
  index,
  update,
  delete: deleteTaco,
  addSauce,
}