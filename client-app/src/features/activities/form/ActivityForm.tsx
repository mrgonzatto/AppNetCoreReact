import React, { FormEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/layout/models/activity';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
}

const ActivityForm: React.FC<IProps> = ({ setEditMode, activity: initialFormState }) => {

  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleSubmit = () => {
    console.log(activity);
  }

  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input onChange={handleInputChange} name='title' placeholder='Title' value={activity.title} />
        <Form.TextArea onChange={handleInputChange} name='description' rows={2} placeholder='Description' value={activity.description} />
        <Form.Input onChange={handleInputChange} name='category' placeholder='Category' value={activity.category} />
        <Form.Input onChange={handleInputChange} name='date' type='date' placeholder='Date' value={activity.date} />
        <Form.Input onChange={handleInputChange} name='city' placeholder='City' value={activity.city} />
        <Form.Input onChange={handleInputChange} name='venue' placeholder='Venue' value={activity.venue} />
        <Button floated='right' positive type='submit' content='Submit' />
        <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel' />
      </Form>
    </Segment>

  )
}

export default ActivityForm
