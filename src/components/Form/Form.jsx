import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2, 'Too Short!').max(20, 'Too Long!'),
  number: Yup.number().required().min(2),
});

const initialValues = {
  name: '',
  number: '',
  filter: '',
};

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

export class FormView extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = ({ name, number }, { resetForm }) => {
    const contactObj = { id: nanoid(4), name, number };
    this.setState({ contacts: [contactObj, ...this.state.contacts] });
    resetForm();
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
        >
          <Form autoComplete="off">
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" placeholder="Name" />
              <FormError name="name" />
            </div>
            <div>
              <label htmlFor="number">Number</label>
              <Field type="text" name="number" placeholder="xxx-xx-xx" />
              <FormError name="number" />
            </div>
            <button type="submit">Add contacts</button>
          </Form>
        </Formik>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(el => (
            <li key={el.id}>
              <span>{el.name}</span>
              <span>{el.number}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
