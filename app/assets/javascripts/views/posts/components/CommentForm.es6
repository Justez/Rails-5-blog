import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength200 = maxLength(200)
const minLength = min => value =>
  value && value.length < min ? `Write at least ${min} characters` : undefined
const minLength10 = minLength(10)

const renderField = ({ input, label, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        className="form-control"
        placeholder={label}
        type="text"
      />
      {touched && ((error && <div className="alert alert-warning">{error}</div>) || (warning && <div className="alert alert-warning">{warning}</div>))}
    </div>
  </div>
)

let CommentForm = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          component={renderField}
          label="Your comment:"
          name="comment[body]"
          type="text"
          validate={[ required, minLength10, maxLength200 ]}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-outline-primary"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

CommentForm = reduxForm({
  form: 'comment'
})(CommentForm)

export default CommentForm
