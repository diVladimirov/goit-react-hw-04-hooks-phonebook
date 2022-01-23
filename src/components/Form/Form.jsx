import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required(),
  number: Yup.number().required(),
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
  handleSubmit = ({ name, number }, { resetForm }) => {
    // const isNameInContacts = this.props.contacts.find(
    //   contact => contact.name.toLowerCase() === name.toLowerCase(),
    // );

    // if (isNameInContacts) {
    //   alert(`${name} is already in contacts`);
    //   return;
    // }

    const contactObj = { id: nanoid(4), name, number };
    console.log(contactObj);
    this.props.onSubmit(contactObj);
    resetForm();
  };

  render() {
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
      </div>
    );
  }
}

// class Form extends Component {
//   state = {
//     name: '',
//   };

//   handleInputChange = event => {
//     // console.log(event.currentTarget);
//     // console.log(event.currentTarget.name);
//     // console.log(event.currentTarget.value);
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.name);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// export default Form;
