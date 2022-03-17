import { TextField, Button, Grid, GridListTile } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsarios({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validacoes = useContext(ValidacacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12}>
          <TextField
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="email"
            label="email"
            name="email"
            type="email"
            required
            variant="outlined"
            fullWidth
            margin="normal"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={senha}
            onChange={(event) => {
              setSenha(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            id="senha"
            label="senha"
            name="senha"
            type="password"
            required
            variant="outlined"
            fullWidth
            margin="normal"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="secondary" fullWidth>
            Proximo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default DadosUsarios;
