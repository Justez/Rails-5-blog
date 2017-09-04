import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength200 = maxLength(200)
const maxLength1000 = maxLength(1000)
const minLength = min => value =>
  value && value.length < min ? `Write at least ${min} characters` : undefined
const minLength15 = minLength(15)
const minLength30 = minLength(30)
const minLength200 = minLength(200)

const renderField = ({ input, label, inputValue, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        className="form-control"
        placeholder={label}
        type="text"
        value={inputValue}
      />
      {touched && ((error && <div className="alert alert-warning">{error}</div>) || (warning && <div className="alert alert-secondary">{warning}</div>))}
    </div>
  </div>
)
let attributesArea = {

}
const renderFieldArea = ({ input, label, inputValue, rows, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea
        {...input}
        className="form-control"
        placeholder={label}
        rows={rows}
        type="text"
        value={inputValue}
      />
      {touched && ((error && <div className="alert alert-warning">{error}</div>) || (warning && <div className="alert alert-secondary">{warning}</div>))}
    </div>
  </div>
)

let PostForm = props => {
  const { handleSubmit, handleChange, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          component={renderField}
          label="Title"
          name="post[title]"
          onChange={handleChange}
          inputValue={(props.post) ? props.post.title : undefined}
          validate={[ required, minLength15, maxLength200 ]}
        />
      </div>
      <div className="form-group">
        <Field
          className="form-control"
          component={renderFieldArea}
          name="post[body]"
          label="Content"
          onChange={handleChange}
          inputValue={(props.post) ? props.post.body : undefined}
          rows="7"
          validate={[ required, minLength200 ]}
        />
      </div>
      <div className="form-group">
        <Field
          component={renderFieldArea}
          name="post[description]"
          label="Description"
          rows="5"
          onChange={handleChange}
          inputValue={(props.post) ? props.post.description : undefined}
          validate={[ required, minLength30, maxLength1000 ]}
        />
      </div>
      <button type="submit" className="btn btn-outline-success" disabled={submitting}>Save and show</button>
    </form>
  )
}

PostForm = reduxForm({
  form: 'newPost'
})(PostForm)

export default PostForm
