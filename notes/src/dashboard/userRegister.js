/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import { Button, Checkbox, Form, Segment,Input} from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 70%;
margin-left : 330px;
margin-top:70px;
margin-right : 200px;
margin-bottom :50px;
`
function Register(props) {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
 const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(userName, email, password, contact));
  }
  console.log(userName, "username");
  console.log(email, "username");
  console.log(contact, "username");
  return(
      <Wrapper>
   <div>
     <Segment>
 <Form onSubmit ={submitHandler}>
 {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
    <Form.Field required>
      <label>Full Name</label>
      <Input placeholder='Full Name' type="text" name="userName" 
             value={userName} onChange={(e) => setName(e.target.value)} icon='user circle outline' required/>
    </Form.Field>
    <Form.Field required>
      <label>E-mail</label>
      <Input placeholder='E-mail' type ="text" name="email"
             value={email} onChange={(e) => setEmail(e.target.value)} icon='envelope' required/>
    </Form.Field>
    <Form.Field required>
      <label>Enter Password</label>
      <Input placeholder='Password' type ="password" name="password"
             value={password}  onChange={(e) => setPassword(e.target.value)} icon='envelope' required/>
    </Form.Field>
    <Form.Field required>
      <label>Contact</label>
      <Input  placeholder='Contact' type ="text" name="contact"
              value={contact} onChange={(e) => setContact(e.target.value)} icon='phone'required/>
    </Form.Field>
      <Button color = "blue" type='submit'>Register</Button>
 </Form>
 </Segment>

  </div>
  </Wrapper>
  )
}
export default Register;