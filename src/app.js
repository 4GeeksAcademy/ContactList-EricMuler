import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContactProvider } from './context/ContactContext';
import contact from './components/contact';
import addContact from './components/addContact';

const app = () => {
  return (
    <ContactProvider> 
      <Router>
        <Switch>
          
          <Route exact path="/" component={contact} />

          
          <Route path="/add-contact" component={addContact} />

          
          <Route path="/edit-contact/:id" component={addContact} />
        </Switch>
      </Router>
    </ContactProvider>
  );
};

export default app;
