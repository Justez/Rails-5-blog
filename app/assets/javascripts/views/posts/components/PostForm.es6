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

const renderField = ({ input, label, componentType, value, rows, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        className="form-control"
        //add a componentType (for textarea)
        placeholder={label}
        rows={rows}
        type="text"
        value={value}
      />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let PostForm = props => {
  const { handleSubmit, handleChange, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          component={renderField}
          componentType="text"
          label="Title"
          name="post[title]"
          onChange={handleChange}
          value={(props.post) ? props.post.title : ''}
          validate={[ required, minLength15, maxLength200 ]}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <Field
          className="form-control"
          component={renderField}
          componentType="textarea"
          name="post[body]"
          rows="7"
          validate={[ required, minLength200 ]}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <Field
          component={renderField}
          componentType="textarea"
          name="post[description]"
          rows="5"
          validate={[ required, minLength30, maxLength1000 ]}
        />
      </div>
      <button type="submit" className="btn btn-outline-success">Save and show</button>
      <button type="submit" className="btn btn-outline-success" disabled={submitting}>Submit</button>
    </form>
  )
}

PostForm = reduxForm({
  form: 'newPost'
})(PostForm)

export default PostForm
