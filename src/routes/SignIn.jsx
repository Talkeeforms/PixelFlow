import { useState } from "react";
import { SignInPage } from "@toolpad/core";
import {
  Alert,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./default.css";

const providers = [{ id: "credentials", name: "Email e Senha" }];

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [alert, setAlert] = useState({
    type: "info",
    message: "Digite um login e senha para continuar",
  });
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  const TitleLogin = () => {
    return (
      <img
        src="src/assets/logo.png"
        style={{ width: "auto", height: "auto", maxHeight: "140px" }}
      ></img>
    );
  };

  const AlertBox = () => {
    return (
      <div>
        {alert && (
          <Alert severity={alert.type} sx={{ mb: 0 }}>
            {alert.message}
          </Alert>
        )}
      </div>
    );
  };

  const submitButton = () => {
    return (
      <Button
        type="submit"
        variant="contained"
        color="info"
        disableElevation
        fullWidth
        sx={{
          marginTop: "40px",
          fontWeight: "800",
          fontWeight: 700,
          fontSize: 15,
          textTransform: "none",
        }}
        onClick={handleSignIn}
      >
        Entrar
      </Button>
    );
  };

  const registerButton = () => {
    return (
      <Button
        type="submit"
        variant="text"
        color="info"
        disableElevation
        fullWidth
        sx={{
          marginTop: "10px",
          fontSize: 15,
          textTransform: "none",
        }}
      >
        Registrar-se
      </Button>
    );
  };

  const rememberMe = () => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            name="tandc"
            value="true"
            color="primary"
            sx={{ padding: 0.5, "& .MuiSvgIcon-root": { fontSize: 25 } }}
          />
        }
        slotProps={{
          typography: {
            fontSize: 14,
          },
        }}
        color="textSecondary"
        label="Lembrar de mim"
        sx={{
          marginTop: "10px",
          alignSelf: "center",
        }}
      />
    );
  };

  const forgotPassword = () => {
    return (
      <Link href="/example" underline="none" sx={{ fontSize: 14 }}>
        Esqueceu a senha?
      </Link>
    );
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          backgroundColor: "black",
          borderBottomRightRadius: "40px",
          borderTopRightRadius: "40px",
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiStack-root": {
            border: "none",
            boxShadow: "none",
            padding: 0,
          },
        }}
      >
        <SignInPage
          signIn={handleSignIn}
          providers={providers}
          slotProps={{
            emailField: {
              variant: "standard",
              onChange: (e) => setEmail(e.target.value),
              value: email,
            },
            passwordField: {
              variant: "standard",
              onChange: (e) => setPassw(e.target.value),
              value: passw,
            },
          }}
          slots={{
            title: TitleLogin,
            subtitle: AlertBox,
            rememberMe: rememberMe,
            forgotPasswordLink: forgotPassword,
            submitButton: submitButton,
            signUpLink: registerButton,
          }}
        />
      </Box>
    </Box>
  );
}
