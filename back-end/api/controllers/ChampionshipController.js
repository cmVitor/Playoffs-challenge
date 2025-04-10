import Championship from "../models/Championship.js";

const ChampionshipController = {

    async createChampionship(req, res) {
        try {
            console.log(req.body); // Para debug
            const novoCampeonato = new Championship(req.body);
            await novoCampeonato.save();
            res.status(200).json({ message: "Campeonato salvo com sucesso" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao salvar dados" });
        }
    },

    async getChampionships(req, res) {

        try {

            const champs = await Championship.find()
            return res.status(200).json(champs)

        } catch (err) {
            return res.status(400).json(err)
        }
    },
    async getChampionshipByName(req, res) {
        try {
            const championship = await Championship.findOne({ name: req.params.name });
            if (!championship) {
                return res.status(404).json({ message: "Campeonato não encontrado" });
            }
            return res.status(200).json(championship);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar campeonato" });
        }
    }, 
    async deleteChampionship(req, res) {
        const { championship_id } = req.params;

        try {
            const deletedChampionship = await Championship.findByIdAndDelete(championship_id);
            if (!deletedChampionship) return res.status(404).json({ message: 'Campeonato não encontrado!' })
            return res.status(200).json(deletedChampionship);

        } catch (err) {
            return res.status(400).json(err)
        }
    },
    async updateChampionship(req, res) {
        const { championship_id } = req.params;
        const { name, logo, colorClass, rounds } = req.body;

        try {
            const updatedChampionship = await Championship.findByIdAndUpdate(championship_id, { name, logo, colorClass, rounds }, { new: true });
            if (!updatedChampionship) return res.status(404).json({ message: 'Campeonato não encontrado!' })
            return res.status(200).json(updatedChampionship);

        } catch (err) {
            return res.status(400).json(err)
        }
    }

}

export default ChampionshipController;