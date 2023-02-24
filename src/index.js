import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Text from './components/Text'
import Text2 from './components/Text2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Text />
  <Text2 name='Amir' age='14' city='Moscow'/>
  <Text2 name='Salambek' age='17' city='Saint-Petersburg'/>
  </>
);


