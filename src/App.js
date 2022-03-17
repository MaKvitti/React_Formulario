import React, { Component, Fragment } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import "@fontsource/roboto/400.css";

import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacacoesCadastro from "./contexts/validacoesCadastro";
import { ReactComponent as Register } from "./assets/register.svg";

class App extends Component {
  render() {
    return (
      <Container
        component="article"
        maxWidth="sm"
        style={{ marginTop: "10vh" }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={2}
        >
          <Grid item xs={12}>
            <Register />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" align="center">
              Formulario de Cadastro
            </Typography>
          </Grid>
        </Grid>

        <ValidacacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
