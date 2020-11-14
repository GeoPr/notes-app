import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TApp } from '../redux/reducers/rootReducer';
import './App.scss';
import { Form } from './Form/Form';
import { Notes } from './Notes/Notes';

const App: React.FC = () => {
  const notes = useSelector((state: TApp) => state.notes)
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="wrapper">
      <main className="page">
        <section className="sc">
          <div className="sc__container _container">
            <div className="sc__body">
              <Form />
              <Notes />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
