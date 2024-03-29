import React from 'react'
import {Grid, List} from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'
import ActivityList from './ActivityList'

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity:  IActivity | null;
    editMode: boolean;
    setEditMode: (editMode:boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    deleteActivity: (id: string) => void;
}

const ActivityDasboard: React.FC<IProps> = ({
    activities, 
    selectActivity, 
    selectedActivity,
    editMode,
    setEditMode,
    setSelectedActivity,
    createActivity,
    editActivity,
    deleteActivity
}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity} 
                    deleteActivity={deleteActivity} 
                />
            </Grid.Column>
            <Grid.Column width={6}>     
                {selectedActivity && !editMode && (
                    <ActivityDetails 
                        activity={selectedActivity} 
                        setEditMode={setEditMode}
                        setSelectedActivity={setSelectedActivity} 
                    /> 
                )}
                {editMode && (
                    <ActivityForm 
                        key={selectedActivity && selectedActivity.id || 0}
                        setEditMode={setEditMode} 
                        activity={selectedActivity!} 
                        createActivity={createActivity} 
                        editActivity={editActivity}  
                    />
                )}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDasboard