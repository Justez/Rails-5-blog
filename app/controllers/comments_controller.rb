class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_post, only: [:index, :show, :create, :destroy]

  def index
    @comments = @post.comments.all
    render json: @comments
  end

  def create
      @comment = @post.comments.create(comment_params)
      render json: @comment
  end

  def show
      @comment = @post.comments.all
      render json: @comment
  end

  def destroy
      @comment = @post.comments.find(params[:id])
      @comment.destroy
      render json: @comment
  end

  private
  def comment_params
    params.require(:comment).permit(:body).merge(commenter: '1')
  end

  def set_post
    @post = Post.friendly.find(params[:post_id])
  end
end
