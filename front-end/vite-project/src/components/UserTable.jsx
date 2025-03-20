import React from 'react'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users") // Substitua pela URL correta do seu backend
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Erro ao buscar usuários:", error));
    }, []);

    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`http://localhost:5000/users/${userId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setUsers(users.filter(user => user._id !== userId)); // Atualiza a tabela sem precisar recarregar a página
            } else {
                console.error("Erro ao deletar usuário");
            }
        } catch (error) {
            console.error("Erro ao conectar com o servidor:", error);
        }
    };


    return (
        <div className="user-table">
            <h2>Usuários Cadastrados</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.senha}</td>
                            <td className="delete-cell">
                                <button
                                    className="delete-button" onClick={() => handleDelete(user._id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
