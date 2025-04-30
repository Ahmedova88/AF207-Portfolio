import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  username: Yup.string()
    .required()
    .min(3),
  password: Yup.string()
    .required()
    .min(6),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {

      const response = await axios.get("http://localhost:3000/users?username=" + values.username);

      if (response.data.length === 0) {
        toast.error("İstifadəçi adı tapılmadı");
        setLoading(false);
        return;
      }

     
      const user = response.data[0]; 
      if (user.password === values.password) {
        toast.success("Giriş uğurludur");
        navigate("/"); 
      } else {
        toast.error("Şifrə yalnışdır");
      }
    } catch (error) {
      toast.error("Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <div>
              <Field
                as={TextField}
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={<ErrorMessage name="username" />}
                error={Boolean(<ErrorMessage name="username" />)}
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={<ErrorMessage name="password" />}
                error={Boolean(<ErrorMessage name="password" />)}
              />
            </div>
            <div style={{ marginTop: "16px" }}>
              <Button type="submit" variant="contained" fullWidth disabled={loading}>
                {loading ? "Yüklənir..." : "Giriş"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
