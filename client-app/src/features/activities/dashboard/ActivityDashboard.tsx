import React from 'react'
import {Grid, List} from 'semantic-ui-react'
import { IActivity } from '../../../app/layout/models/activity'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'
import ActivityList from './ActivityList'

interface IProps {
    activities: IActivity[]
}

const ActivityDasboard: React.FC<IProps> = ({activities}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetails />
                <ActivityForm />
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDasboard