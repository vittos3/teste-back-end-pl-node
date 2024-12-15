import express from "express";
import pool from "../bd/bd.js";

const app = express();

app.use(express.json());

app.post("/beneficiario", async (req, res) => {
  const { nome, email, data_nascimento } = req.body;

  if (!nome || !email || !data_nascimento) {
    return res.status(400).json({
      message: "Preencha todos campos corretamente e tente novamente!",
    });
  }

  try {
    const query = `insert into beneficiarios (nome, email, data_nascimento)
    VALUES ($1, $2, $3) RETURNING *`;
    const result = await pool.query(query, [nome, email, data_nascimento]);

    res
      .status(201)
      .json({
        message: "Beneficiário criado com sucesso!",
        usuario: result.rows[0],
      });
      
  } catch (error) {
    console.error("Erro ao inserir dados no banco!", error);
    res.status(500).send({ error: "Erro ao adicionar dados no banco!" });
  }
});

app.listen(3000, () => console.log("Está rodando..."));
