/* eslint-disable no-unused-vars */
import React , { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  Container, Header, Form,TextArea , Input, Segment, Button} from 'semantic-ui-react';
import styled from 'styled-components';
import { addNote } from '../actions/noteActions';

const Wrapper = styled.div`
width: 50%;
margin-left : 350px;
margin-top:70px;
margin-right : 20px;
margin-bottom :50px;
`
function Note(){
const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNote(title, notes));
  }
    return (
        <Wrapper>
        <div>
            <Form onSubmit={submitHandler}>
                <Segment stacked>
                    <Form.Field
                    control={Input}
                    label='Title'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Field
                    control={TextArea}
                    label='Notes'
                    placeholder='Add your notes...'
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    />
                    <Button color="blue" type="submit">Add Note</Button>
                </Segment>
            </Form>
        </div>
        </Wrapper>
    )
}

export default Note;