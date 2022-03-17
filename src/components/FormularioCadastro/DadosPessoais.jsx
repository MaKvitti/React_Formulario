import React, { useState, useContext } from "react";
import {
  Switch,
  TextField,
  Button,
  FormControlLabel,
  Grid,
} from "@material-ui/core";
import ValidacacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("Ricardo");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setcpf] = useState("");
  const [promocoes, setpromocoes] = useState(true);
  const [novidades, setnovidades] = useState(true);
  const validacoes = useContext(ValidacacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12}>
          <TextField
            onChange={(event) => {
              setNome(event.target.value);
            }}
            id="nome"
            name="nome"
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(event) => {
              setSobrenome(event.target.value);
            }}
            id="sobrenome"
            label="Sobrenome"
            name="sobrenome"
            variant="outlined"
            fullWidth
            margin="normal"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(event) => {
              setcpf(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="cpf"
            name="cpf"
            label="CPF"
            variant="outlined"
            fullWidth
            margin="normal"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              <FormControlLabel
                label="Novidades"
                control={
                  <Switch
                    checked={novidades}
                    onChange={(event) => {
                      setnovidades(event.target.checked);
                    }}
                    name="novidade"
                    color="secondary"
                  />
                }
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                label="Promoções"
                control={
                  <Switch
                    checked={promocoes}
                    onChange={(event) => {
                      setpromocoes(event.target.checked);
                    }}
                    name="promocoes"
                    color="secondary"
                  />
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Proximo
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default DadosPessoais;
