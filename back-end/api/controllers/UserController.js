import User from "../models/User.js";

const UserController = {
    async createUser(req, res) {

        try {
            const novoUser = new User(req.body);
            await novoUser.save();
            res.status(201).json({ message: "Dados salvos com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao salvar dados" });
        }
    },

    async getUsers(req, res) {

        try {

            const users = await User.find()
            return res.status(200).json(users)

         } catch(err){
            return res.status(400).json(err)
        }
    },

    async getUser(req, res) {
            
            const { user_id } = req.params;
    
            try {
                const user = await User.findById(user_id);
                if(!user) return res.status(404).json({message: 'Usuário não encontrado!'})
                return res.status(200).json(user);
                
            } catch(err){
                return res.status(400).json(err)
        }
    },

    async deleteUser(req, res) {

        const { user_id } = req.params;

        try {
            const deletedUser = await User.findByIdAndDelete(user_id);
            if(!deletedUser) return res.status(404).json({message: 'Usuário não encontrado!'})
            return res.status(200).json(deletedUser);
            
        } catch(err){
            return res.status(400).json(err)
        }
    }
}

export default UserController;