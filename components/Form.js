import React, { useState } from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../styles/form.module.scss";
import FormInput from "./FormInput";
import emailjs from "emailjs-com";

const Form = ({ blok }) => {
  const [values, setValues] = useState({});

  const fieldChanged = (fieldId, value) => {
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });
  };
  const submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zhi04ue",
      "template_1oawws5",
      e.target,
      "user_CkGezjRimf0X9SUnUERbP"
    );
  };

  return (
    <div
      {...sbEditable(blok)}
      className={styles.formContainer}
      style={{ backgroundImage: `url(${blok.backgroundImage.filename})` }}
    >
      <h1>{blok.form_name}</h1>
      <span className={styles.formDescription}>{blok.formDescription}</span>
      <form onSubmit={submitForm}>
        {blok.fields.map((item, index) => (
          <FormInput
            key={index}
            blok={item}
            value={values[item.name]}
            fieldChanged={fieldChanged}
          />
        ))}
        <button type="submit" className={styles.submitButton}>
          Anmäl
        </button>
      </form>
    </div>
  );
};

export default Form;
