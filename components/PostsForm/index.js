import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Container } from "./styles";
import { addNewCard } from "../../pages/api/posts/cards";
import { useUser } from "lib/useUser";
import { useRouter } from "next/router";
import { getUserById } from "../../pages/api/auth/get";

const PostsForm = ({ userId, userName }) => {
  const [message, setMessage] = useState("");
  const router = useRouter();

  return (
    <Container>
      <Formik
        initialValues={{ title: "", excerpt: "", content: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Requerido";
          }
          if (!values.excerpt) {
            errors.excerpt = "Requerido";
          }
          if (!values.content) {
            errors.content = "Requerido";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            if (!userName) {
              const res = await getUserById(userId);

              userName = res.nombre;
            }

            await addNewCard({ ...values, user_id: userId, userName });

            router.push("/");

            // const res = await axios.post('/api/posts/create', {...values, user_id:userId})
            // const data = await res.data
            // setSubmitting(false);
            // setMessage(`Post creado, thanks ${data.title} (${res.status})`)
          } catch (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
            console.log(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input_row" id="input2">
              <Field type="text" name="title" placeholder="Título" />
              <ErrorMessage name="title" component="div" />
            </div>
            <div className="input_row" id="input2">
              <Field type="text" name="excerpt" placeholder="Subtitulo" />
              <ErrorMessage name="company" component="div" />
            </div>
            <div className="input_row" id="textarea2">
              <Field as="textarea" type="content" name="content" placeholder="Texto" />
              <ErrorMessage name="content" component="div" />
            </div>
            <button className="button2" type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
      <p>{message}</p>
    </Container>
  );
};

export default PostsForm;
