import { FormView } from './Form/Form';

export const App = () => {
  return (
    <div>
      <FormView />
    </div>
  );
};

// class App extends React.Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   formSubmitHandler = data => {
//     console.log(data);
//     // const todo = {
//     //   id: nanoid(),
//     //   data,
//     // };

//     // this.setState(prevState => ({
//     //   todos: [todo, ...prevState.todos],
//     // }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.formSubmitHandler} />
//         <h2>Contacts</h2>
//         <p></p>
//       </div>
//     );
//   }
// }

// export default App;
