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

              <Form  className="contactForm push" onSubmit={e => {
                e.preventDefault();
              }}>
              <h2 className="header">Contact Me</h2>

              <FormGroup className="stretch">
                <Input type="name" name="name" id="exampleName" value={name} onChange={e => onChange(e)} placeholder="Name" />
              </FormGroup>
               <FormGroup>
                 <Input type="email" name="email" id="exampleEmail" value={email} onChange={e => onChange(e)} placeholder="Email" />
               </FormGroup>
               <FormGroup>
                 <Input type="subject" name="subject" id="exampleSubject" value={subject} onChange={e => onChange(e)} placeholder="Subject" />
               </FormGroup>
               <FormGroup>
                 <Input type="textarea" name="message" value={message} onChange={e => onChange(e)} id="exampleMessage" placeholder="Message"  />
               </FormGroup>
               <Button className="blue">Submit</Button>
             </Form>
            </div>
          </div>
        </section>
        );
}

export default ContactUs;
