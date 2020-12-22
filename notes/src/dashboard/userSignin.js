/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';
function Signin(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }
  console.log(email, "email");
  console.log(password, "password")
  return <div>
     <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Form size='large' onSubmit={submitHandler}>
                    <Segment stacked>
                      <Form.Field>
                      {loading && <div>Loading...</div>}
                      {error && <div>{error}</div>}
                      </Form.Field>
                        <Form.Input fluid icon='user' 
                        iconPosition='left' 
                        placeholder='E-mail address'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        value={password}  onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button color='blue' type="submit" fluid size='large'>Login</Button>
                        <Button  fluid size='large' style ={{marginTop : '20px' ,color: 'white'}}>
                        <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your Notes account</Link>
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>

  </div>
}
export default Signin;