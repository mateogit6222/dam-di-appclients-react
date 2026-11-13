import { IonApp, IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import React, { useEffect, useState } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Theme variables */
import './theme/variables.css';

import { supabase } from './supabaseClient';

setupIonicReact();

interface Todo {
  id: string | number;
  name: string;
}

export default function App(): React.JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async (): Promise<void> => {
    try {
      const { data, error } = await supabase.from('todos').select();

      if (error) {
        console.error('Error fetching todos:', error.message);
        return;
      }

      if (data) {
        setTodos(data as Todo[]);
      }
    } catch (error: any) {
      console.error('Error fetching todos:', error?.message || error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getTodos();
  }, []);

  return (
    <IonApp>
      <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Todos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {todos.map((todo) => (
              <IonItem key={todo.id}>{todo.name}</IonItem>
            ))}
          </IonList>
        </IonContent>
      </>
    </IonApp>
  );
}
