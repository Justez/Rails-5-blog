class CommentsController < ApplicationController
  before_action :set_post, only: [:index, :show, :create, :destroy]

  def index
    @comments = @post.comments.all
    commentArray = []
    @comments.each do |item|
      commentArray.push(
          body: item.body,
          commenter: {
            user_id: item.commenter,
            user_email: User.select(:email).find(item.commenter).email
          },
          date: item.created_at.strftime('%-H:%-M:%-S %-b %-d, %Y')
      )
    end
    render json: commentArray
  end

  def create
      @comment = @post.comments.create(comment_params)
      render json: @comment
  end

  def show
      @comment = @post.comments.find(params[:id])
      render json: [{
        body: @comment.body,
        commenter: {
          user_id: @comment.commenter,
          user_email: User.select(:email).find(@comment.commenter).email
        }},
        {
          body: @comment.body,
          commenter: {
            user_id: @comment.commenter,
            user_email: User.select(:email).find(@comment.commenter).email
        }
      }]
  end

  def destroy
      @comment = @post.comments.find(params[:id])
      @comment.destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:commenter, :body)
  end

  def set_post
    @post = Post.friendly.find(params[:post_id])
  end
end
