import React from 'react';
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", senha: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Dados enviados com sucesso!");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        alert("Erro ao enviar dados");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao conectar com o servidor");
    }
  };

      return (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label className="form__label">Nome</label>
            <input className="form__input" type="text" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className="form__group">
            <label className="form__label">Email</label>
            <input className="form__input" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form__group">
            <label className="form__label">Senha</label>
            <input className="form__input" type="password" name="senha" value={formData.senha} onChange={handleChange} required />
          </div>
          <button className="form__button" type="submit">Enviar</button>
        </form>
      );
    };

    export default Form;