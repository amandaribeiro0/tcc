const express = require('express')
const router = express.Router();
const Controller = require('../Controllers/Controller');
const UserController = require('../Controllers/UserController');
const PatrimonyController = require('../Controllers/PatrimonyController')
router.get('/migration', Controller.CreateTable);
router.post('/login', UserController.index);
router.post('/register', UserController.create);
router.put('/update', UserController.update);
router.delete('/delete', UserController.delete);
router.post('/Patrimony',PatrimonyController.SearchingPatrimony)
router.post("/insertPatrimony/:id", PatrimonyController.CreatePatrimony)
router.put("/updatePatrimony", PatrimonyController.UpdatePatrimony)
router.delete("/deletePatrimony", PatrimonyController.DeletePatrimony)

module.exports = router;