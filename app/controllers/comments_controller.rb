class CommentsController < ApplicationController

  def index
    @post    = Post.friendly.find(params[:post_id])
    @comments = @post.comments.all
    render json: @comments
  end

  def create
      @post = Post.friendly.find(params[:post_id])
      @comment = @post.comments.create(comment_params)
      redirect_to post_path(@post)
      #render json: @comment
  end


  def show
      @post = Post.friendly.find(params[:id])
      @comment = @post.comments.all
      #redirect_to post_path(@post)
      render json: @comment
  end

  def destroy
      @post = Post.friendly.find(params[:post_id])
      @comment = @post.comments.find(params[:id])
      @comment.destroy
      redirect_to post_path(@post)
  end

  private
  def comment_params
      params.require(:comment).permit(:commenter, :body)
  end
end
