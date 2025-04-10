import { Router } from "express";
import UserController from "../controllers/UserController.js";
import ChampionshipController from "../controllers/ChampionshipController.js";

const routes =  Router()

routes.get('/', (req, res) => {
    res.send('Hello World!')
})

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUser)
routes.delete('/users/:user_id', UserController.deleteUser)

routes.post('/campeonatos', ChampionshipController.createChampionship)
routes.get('/campeonatos', ChampionshipController.getChampionships)
routes.get('/campeonatos/:name', ChampionshipController.getChampionshipByName)
routes.delete('/campeonatos/:championship_id', ChampionshipController.deleteChampionship)
routes.put('/campeonatos/:championship_id', ChampionshipController.updateChampionship)

export default routes;