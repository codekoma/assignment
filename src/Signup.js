import React, { Component } from 'react';
import {  Form} from "semantic-ui-react";

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          password: "",
          mobile: "",
        };
        this.render = this.render.bind(this);
    }


   change = (e) => {
    this.setState({[e.target.name]: e.target.value,});};
          
    render() {
        return (
            <div className="container">
            <Form>
              <Form.Field>
              <label>NAME</label>
              <input
                name="name"
                placeholder="name"
                type="text"
                value={this.state.name}
                // ref={this.losslimit}
                onChange={(e) => this.change(e)}
                label={{ children: "name" }}
              />
              </Form.Field>
              
              <Form.Field>
              <label>EMAIL</label>
              <input
                name="email"
                placeholder="email"
                type="text"
                value={this.state.email}
                // ref={this.losslimit}
                onChange={(e) => this.change(e)}
                label={{ children: "email" }}
              />
              </Form.Field>
              
              <Form.Field>
              <label>PASSWORD</label>
              <input
                name="password"
                placeholder="password"
                type="text"
                value={this.state.password}
                // ref={this.losslimit}
                onChange={(e) => this.change(e)}
                label={{ children: "password" }}
              />
              </Form.Field>
              
              <Form.Field>
              <label>MOBILE NUMBER</label>
              <input
                name="mobile"
                placeholder="mobile number"
                type="text"
                value={this.state.mobile}
                // ref={this.losslimit}
                onChange={(e) => this.change(e)}
                label={{ children: "mobile" }}
              />
              </Form.Field>
              </Form>
            </div>
        );
    }
}

