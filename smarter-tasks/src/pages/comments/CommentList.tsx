import { useCommentsState } from "../../context/comment/context";

const CommentList = () => {
  const commentState = useCommentsState();

  const { comments, isLoading, isError, errorMessage } = commentState;

  if (isError) {
    return <div>Error: {errorMessage}</div>;
  }

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  // Get the current user from localStorage
  const currentMember = JSON.parse(localStorage.getItem("userData") || "{}");
  const User = currentMember.name.toString();
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium">Comments</h3>
      <div className="mt-2">
        {comments.length === 0 ? (
          <div>No comments yet</div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="mr-3">{comment.description}</div>
              <div className="mr-3">{comment.createdAt}</div>
              <div className="mr-3">{comment.comment}</div>
              <div className="mr-3">
                {comment.User ? comment.User.name : User}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentList;