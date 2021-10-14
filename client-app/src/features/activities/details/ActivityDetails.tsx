
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Grid,GridColumn } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LodingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSideBar from './ActivityDetailedSideBar';


export default observer(function ActivityDetails(){


    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity,loadingInitial} = activityStore;
    //Nos traemos el Id de los params
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if(id) loadActivity(id);
    },[id,loadActivity])


    if (loadingInitial || !activity) return <LoadingComponent />;

    if(!activity) return <LoadingComponent/>;

    return(
        <Grid>
            <GridColumn width={10}>
                <ActivityDetailedHeader  activity={activity}/>
                <ActivityDetailedInfo activity={activity}/>
                <ActivityDetailedChat />

            </GridColumn>
            <GridColumn width={6}>
                <ActivityDetailedSideBar />
            </GridColumn>

        </Grid>

    )
})