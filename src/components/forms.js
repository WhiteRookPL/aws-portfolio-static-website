import React from "react";
import Formsy, { withFormsy } from "formsy-react";
import TextArea from "react-textarea-autosize";
import styled, { css } from "styled-components";
import { Col, Grid, Row } from "react-flexbox-grid";

import { styles } from "./content";
import { EnvelopeIcon } from "./icons";

import theme from "../theme/main";
import { rhythm } from "../theme/typography";

const ActionButton = styled.button`
  cursor: pointer;
  outline: 0;

  font-family: ${theme.fonts.headerFontFamily}, sans-serif;
  font-weight: bold;
  font-size: ${rhythm(0.5)};
  line-height: ${rhythm(0.5)};

  ${styles.media.tablet`
    width: 100%;
  `}

  padding: ${rhythm(0.6)} ${rhythm(1)};

  -webkit-transition: background-color ${theme.animations.defaultDuration};
  transition: background-color ${theme.animations.defaultDuration};

  border: 2px solid ${theme.colors.mayaBlue};

  color: ${theme.colors.foreground};
  background-color: ${theme.colors.white};

  &:hover:enabled {
    color: ${theme.colors.white};
    background-color: ${theme.colors.mayaBlue};
  }

  &:disabled {
    cursor: default;

    ${props => props.state && css`
      color: ${theme.colors[props.state]};
      border: 2px solid ${theme.colors[props.state]};
    `}
  }
`;

const SendButton = ({ children, disabled, state, type }) => (
  <ActionButton state={state} type={type} disabled={disabled}>
    {children}
    <EnvelopeIcon />
  </ActionButton>
);

const FormControl = styled.div`
  margin: 0;
  padding: 0;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: small;
`;

const NiceTextarea = styled(TextArea)`
  width: 100%;
  min-height: 100px;
  resize: vertical;
  outline: 0;
  border: 0;
  border-bottom: 1px solid ${theme.colors.mayaBlue};
`;

class LongTextClass extends React.Component {
  constructor (props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue (event) {
    this.props.setValue(event.currentTarget.value);
  }

  render () {
    const error = this.props.showError();
    const required = this.props.showRequired();

    const errorMessage = this.props.getErrorMessage();

    return (
      <FormControl required={required} error={error}>
        <NiceTextarea
          maxLength={1000}
          onChange={this.changeValue}
          name={this.props.name}
          placeholder={this.props.title}
          value={this.props.getValue() || ``} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </FormControl>
    );
  }
};

const LongText = withFormsy(LongTextClass);

const NiceInput = styled.input`
  width: 100%;
  outline: 0;
  border: 0;
  border-bottom: 1px solid ${theme.colors.mayaBlue};
`;

class TextClass extends React.Component {
  constructor (props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue (event) {
    this.props.setValue(event.currentTarget[this.props.type === `checkbox`
                                            ? `checked`
                                            : `value`]);
  }

  render () {
    const error = this.props.showError();
    const required = this.props.showRequired();

    const errorMessage = this.props.getErrorMessage();

    return (
      <FormControl required={required} error={error}>
        <NiceInput
          maxLength={200}
          onChange={this.changeValue}
          placeholder={this.props.title}
          name={this.props.name}
          type={this.props.type || `text`}
          value={this.props.getValue() || ``} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </FormControl>
    );
  }
};

const Text = withFormsy(TextClass);

const FormGrid = styled(Grid)`
  .row {
    margin-bottom: ${rhythm(0.25)};
  }
`;

export class ContactForm extends React.Component {
  constructor (props) {
    super(props);

    this.defaultStatus = `normal`;
    this.defaultText = `Send message!`;

    this.state = {
      status: this.defaultStatus,
      text: this.defaultText,

      formValid: false,

      data: null,
    };

    this.onValid = this.onValid.bind(this);
    this.onInvalid = this.onInvalid.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onValid () {
    this.setState({ formValid: true, text: this.defaultText, status: this.defaultStatus, data: this.state.data });
  }

  onInvalid () {
    this.setState({ formValid: false, text: this.defaultText, status: this.defaultStatus, data: this.state.data });
  }

  onSubmit (data) {
    this.setState({ formValid: false, text: `Sending...`, status: this.defaultStatus, data });

    const payload = {
      from: this.props.siteUrl,
    };

    const options = {
      body: JSON.stringify(payload),
      cache: `no-cache`,
      credentials: `same-origin`,
      headers: {
        "content-type": `application/json`
      },
      method: `POST`,
      mode: `cors`,
    };

    fetch(this.props.contactFormHandlerUrl, options).then(
      () => this.setState({ formValid: false, data: null, text: `Thanks!`, status: `success` }),
      () => this.setState({ formValid: false, data: null, text: `Error!`, status: `error` })
    );
  }

  render () {
    return (
      <FormGrid fluid>
        <Row center={`xs`}>
          <Col xs={12}>
            <Formsy onValidSubmit={this.onSubmit} onValid={this.onValid} onInvalid={this.onInvalid}>
              <Row center={`xs`}>
                <Col md={12} lg={6}>
                  <Text name={`name`} title={`Your name`} required />
                </Col>
                <Col md={12} lg={6}>
                  <Text name={`email`} title={`Your email`} validations={`isEmail`}
                        validationError={`Invalid email`} required />
                </Col>
              </Row>
              <Row center={`xs`}>
                <Col xs={12}>
                  <LongText name={`message`} title={`Your message`} required />
                </Col>
              </Row>
              <Row center={`xs`} middle={`xs`}>
                <Col xs={12}>
                  <SendButton type={`submit`}
                              state={this.state.status}
                              disabled={!this.state.formValid}>
                    {this.state.text}
                  </SendButton>
                </Col>
              </Row>
            </Formsy>
          </Col>
        </Row>
      </FormGrid>
    );
  }
};
