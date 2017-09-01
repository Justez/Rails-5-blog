import React from 'react'
import { Field, reduxForm } from 'redux-form'

let PostForm = props => {

  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <Field name="post[title]" component="input" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <Field name="post[body]" component="textarea" className="form-control" rows="7" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <Field name="post[description]" component="textarea" className="form-control" rows="5" />
      </div>
      <button type="submit" className="btn btn-outline-success">Save and show</button>
    </form>
  )
}

PostForm = reduxForm({
  form: 'newPost'
})(PostForm)

export default PostForm
