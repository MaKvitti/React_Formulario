import React from "react";

const ValidacacoesCadastro = React.createContext({
  cpf: semValidacao,
  senha: semValidacao,
});

function semValidacao(dados) {
  return { valido: true, texto: "" };
}

export default ValidacacoesCadastro;
