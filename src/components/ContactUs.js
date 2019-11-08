import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const ContactUs = (props) => {
  const [formData, setFormData ] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const { name, email, subject, message } = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });


    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h2>Contact Me</h2>

              <Form onSubmit={e => {
                e.preventDefault();
              }}>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input type="name" name="name" id="exampleName" value={name} onChange={e => onChange(e)} placeholder="Name" />
              </FormGroup>
               <FormGroup>
                 <Label for="exampleEmail">Email</Label>
                 <Input type="email" name="email" id="exampleEmail" value={email} onChange={e => onChange(e)} placeholder="Email" />
               </FormGroup>
               <FormGroup>
                 <Label for="exampleSubject">Subject</Label>
                 <Input type="subject" name="subject" id="exampleSubject" value={subject} onChange={e => onChange(e)} placeholder="Subject" />
               </FormGroup>
               <FormGroup>
                 <Label for="exampleMessage">Message</Label>
                 <Input type="textarea" name="message" value={message} onChange={e => onChange(e)} id="exampleMessage" />
               </FormGroup>
               <Button>Submit</Button>
             </Form>
            </div>
          </div>
        </section>
        );
}

export default ContactUs;
