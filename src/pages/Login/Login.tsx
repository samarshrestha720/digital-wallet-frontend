import { Box, Button, Grid2 } from "@mui/material";
import "./Login.css";
import { CustomTextField } from "../../components/CustomTextField";
import { Link } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { login } from "../../api/auth";

interface IFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    handleSubmit,
    control,
    formState: {},
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    console.log(await login(data));
  };
  return (
    <Box
      sx={{
        bgcolor: "grey",
        paddingY: "30px",
        paddingX: "50px",
        borderRadius: "10px",
        minHeight: "300px",
        minWidth: "200px",
        width: "400px",
        height: "500px",
      }}
    >
      <div className="heading">Login to Wallet</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={3} flexDirection="column">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomTextField {...field} label="Email" type="email" />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <CustomTextField {...field} label="Password" type="password" />
            )}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ bgcolor: "darkgray" }}
          >
            Login
          </Button>
          <Grid2 sx={{ margin: "0 auto" }}>
            <Link to="/forgotpassword">Forgot Password</Link>
          </Grid2>
          <Grid2>
            <p>Oauth2(Tba)</p>
            <Grid2 container spacing={2} justifyContent="center">
              <p>google</p>
              <p>facebook</p>
            </Grid2>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};
