/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React , { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  Container, Header, Form,TextArea , Input, Segment, Button, Table, TableHeader,Card} from 'semantic-ui-react';
import styled from 'styled-components';
import {  listNotes } from '../actions/noteActions';

const Wrapper = styled.div`
width: 50%;
margin-left : 500px;
margin-top:70px;
margin-right : 20px;
margin-bottom :50px;
`
function ManageNotes(){

  const noteList = useSelector((state) => state.noteLists);
  const { loading, notes, error } = noteList;
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(listNotes());
        return () => {

    };
  }, []);
    return(
        <Wrapper>
        <div >
        <Card.Group>
               {notes.map((note, index) =>(
               <Card>
                   <Card.Content>
                       <Card.Meta style ={{fontSize:'1.3rem', fontWeight:'bold'}}content={note.title} />
                       <Card.Description style={{textAlign: 'justify', wordBreak: 'break-word'}} content={note.notes} />
                    </Card.Content>
                    <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='blue'>
            Edit
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
               </Card>
               ))}
        </Card.Group>
        </div>
        </Wrapper>
    )
}

export default ManageNotes;