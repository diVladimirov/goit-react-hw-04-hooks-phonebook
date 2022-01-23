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
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = ({ name, number }, { resetForm }) => {
    const contactObj = { id: nanoid(4), name, number };
    this.setState({ contacts: [contactObj, ...this.state.contacts] });
    resetForm();
  };

  inputChange = filter => {
    console.log(filter.target.value);
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
              <Field type="tel" name="number" placeholder="xxx-xx-xx" />
              <FormError name="number" />
            </div>
            <button type="submit">Add contacts</button>
          </Form>
        </Formik>
        <h2>Contacts</h2>
        <div>
          <label>Find contact by name</label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            placeholder="Search name"
            onChange={this.inputChange}
          ></input>
        </div>
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
