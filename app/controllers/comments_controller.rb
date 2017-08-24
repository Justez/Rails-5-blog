class CommentsController < ApplicationController
  before_action :set_post, only: [:index, :show, :create, :destroy]

  def index
    @comments = @post.comments.most_recent
    commentArray = []
    @comments.each do |item|
      commentArray.push(
          id: item.id,
          body: item.body,
          created_at: item.created_date,
          commenter_id: item.user_id,
          commenter: User.select(:email).find(item.user_id).email
      )
    end
    render json: commentArray
  end

  def create
    @comment = current_user.comments.create(comment_params.merge(post_id: params[:post_id]))
    render json: {
        id: @comment.id,
        body: @comment.body,
        created_at: @comment.created_date,
        commenter_id: @comment.user_id,
        commenter: User.select(:email).find(@comment.user_id).email
      }
  end

  def show
      @comment = @post.comments.find(params[:id])
      render json: @comment
  end

  def destroy
      @comment = @post.comments.find(params[:id])
      @comment.destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end

  def set_post
    @post = Post.friendly.find(params[:post_id])
  end
end
