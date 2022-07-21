import React, {useEffect, useState, Fragment} from 'react';
import { Container, Header, Icon, List } from 'semantic-ui-react'
import axios from 'axios';
import { IActivity } from './models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDasboard from '../../features/activities/dashboard/ActivityDashboard';

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
      <Fragment>
        <NavBar />
        <Container style={{marginTop:'7em'}}>
          <ActivityDasboard activities={activities} />
        </Container>
      </Fragment>
    );
}

export default App;
