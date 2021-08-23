import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity:(id:string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({activities, selectedActivity, selectActivity,cancelSelectActivity,
    openForm, closeForm, editMode, createOrEdit, deleteActivity,submitting}: Props){

    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                    submitting = {submitting}
                    deleteActivity={deleteActivity}
                    activities={activities} 
                    selectActivity={selectActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails
                    openForm = {openForm} 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity}/>}
                {editMode && 
                <ActivityForm
                    createOrEdit={createOrEdit}
                    activity = {selectedActivity}
                    submitting = {submitting}
                    closeForm = {closeForm}/>}    

            </Grid.Column>
        </Grid>
    )
}