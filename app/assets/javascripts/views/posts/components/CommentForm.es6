import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CommentForm = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Comment</label>
        <Field
          component="textarea"
          name="comment[body]"
          type="text"
          className="form-control"
          placeholder="comment"
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
