import React, {useEffect, useState} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import axios from 'axios';
import { IActivity } from './models/activity';



//function App() {
const App = () => {

  const [activities, setActivities] = useState<IActivity[]>([])

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
    .then((response) => {        
      setActivities(response.data)
    });
  }, []);

 
    return (
      <div>
        <Header as='h2'>
          <Icon name='plug' />
          <Header.Content>AppNetCoreReact</Header.Content>
        </Header>
        <List>          
          {activities.map((activity) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>            
          ))}                  
        </List>
      </div>
    );
}

export default App;
