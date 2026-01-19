import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ServiceForm = ({
  onSubmit,
  initialValues = {
    title: "",
    description: "",
    price: "",
    category: "",
    duration: "",
    artisan_id: 1,
  },
}) => {
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(3, "Title must be at least 3 characters")
      .required("Required"),
    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Required"),
    price: Yup.number().min(0, "Price cannot be negative").required("Required"),
    category: Yup.string().required("Required"),
    duration: Yup.number()
      .min(1, "Duration must be at least 1 minute")
      .required("Required"),
    artisan_id: Yup.number().required("Required"),
  });

  return (
    <div style={styles.formContainer}>
      <h3>Add New Service</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="title">Service Title *</label>
              <Field type="text" id="title" name="title" style={styles.input} />
              <ErrorMessage name="title" component="div" style={styles.error} />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="description">Description *</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                style={styles.textarea}
              />
              <ErrorMessage
                name="description"
                component="div"
                style={styles.error}
              />
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label htmlFor="price">Price ($) *</label>
                <Field
                  type="number"
                  id="price"
                  name="price"
                  style={styles.input}
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  style={styles.error}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="category">Category *</label>
                <Field
                  as="select"
                  id="category"
                  name="category"
                  style={styles.input}
                >
                  <option value="">Select Category</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Design">Design</option>
                  <option value="Other">Other</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  style={styles.error}
                />
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label htmlFor="duration">Duration (minutes) *</label>
                <Field
                  type="number"
                  id="duration"
                  name="duration"
                  style={styles.input}
                />
                <ErrorMessage
                  name="duration"
                  component="div"
                  style={styles.error}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="artisan_id">Artisan ID *</label>
                <Field
                  type="number"
                  id="artisan_id"
                  name="artisan_id"
                  style={styles.input}
                />
                <ErrorMessage
                  name="artisan_id"
                  component="div"
                  style={styles.error}
                />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} style={styles.button}>
              {isSubmitting ? "Submitting..." : "Add Service"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const styles = {
  formContainer: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  formRow: {
    display: "flex",
    gap: "1rem",
  },
  input: {
    padding: "0.5rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.5rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
    minHeight: "100px",
    resize: "vertical",
  },
  button: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "0.75rem",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
  },
  error: {
    color: "#e74c3c",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  },
};

export default ServiceForm;
