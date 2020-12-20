import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "../../components/PostsForm/styles";
import { useRouter } from "next/router";
import { updateCard } from "../api/posts/cards";

const PostsForm = () => {
  const [message, setMessage] = useState("");
  const {
    query: { formulario },
  } = useRouter();
  const info = formulario?.split("-");

  const title = info?.title || "";
  const excerpt = info?.excerpt || "";
  const content = info?.content || "";

  return (
    <Container>
      <Formik
        initialValues={{ title, excerpt, content }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await updateCard(values, cardId);
            router.push("/");
          } catch (error) {
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
              <Field type="textarea" name="content" placeholder="Texto" />
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
