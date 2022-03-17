import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  makeStyles,
  Box,
  Grid,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntraga from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsarios from "./DadosUsuarios";
import { ReactComponent as Register } from "../../assets/smile.svg";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosAtual, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formulario.length - 1) aoEnviar(dadosAtual);
  });

  const formulario = [
    <DadosUsarios aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntraga aoEnviar={coletarDados} />,

    <Grid spacing={2} container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={1}>
        <Register />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h5">Obrigado pelo cadastro</Typography>
      </Grid>
    </Grid>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosAtual, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  const useStyles = makeStyles(() => ({
    root: {
      "& .MuiStepIcon-active": { color: "rgba(245, 0, 87, 255)" },
      "& .MuiStepIcon-completed": { color: "rgba(156, 1, 54, 1)" },
      "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" },
    },
  }));

  const c = useStyles();

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel className={c.root}>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel className={c.root}>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel className={c.root}>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel className={c.root}>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formulario[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
