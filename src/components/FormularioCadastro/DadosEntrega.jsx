import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";

function DadosEntraga({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
          <TextField
            value={cep}
            onChange={(event) => {
              setCep(event.target.value);
            }}
            id="cep"
            label="CEP"
            type="number"
            variant="outlined"
            margin="normal"
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={numero}
            onChange={(event) => {
              setNumero(event.target.value);
            }}
            id="numero"
            label="Numero"
            type="number"
            variant="outlined"
            margin="normal"
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={endereco}
            onChange={(event) => {
              setEndereco(event.target.value);
            }}
            id="endereco"
            label="Endereço"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            color="secondary"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            value={estado}
            onChange={(event) => {
              setEstado(event.target.value);
            }}
            id="estado"
            label="Estado"
            type="text"
            variant="outlined"
            margin="normal"
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={cidade}
            onChange={(event) => {
              setCidade(event.target.value);
            }}
            id="cidade"
            label="Cidade"
            type="text"
            variant="outlined"
            margin="normal"
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="secondary" fullWidth>
            Finalizar Cadastro
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default DadosEntraga;
