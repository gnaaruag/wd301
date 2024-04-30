import { useCommentsState } from "../../context/comment/context";

const CommentList = () => {
  const commentState = useCommentsState();

  // Destructure necessary values from commentState
  const { comments, isLoading, isError, errorMessage } = commentState;

  // Check if there's an error fetching comments
  if (isError) {
    return <div>Error: {errorMessage}</div>;
  }

  // Check if comments are still loading
  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  // Get the current user from localStorage
  const currentMember = JSON.parse(localStorage.getItem("userData") || "{}");
  // const currentUser = currentMember.name.toString();
  const User = currentMember.name.toString();
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium">Comments</h3>
      <div className="mt-2">
        {comments.length === 0 ? (
          <div>No comments available</div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="mr-3">{comment.description}</div>
              <div className="mr-3">{comment.createdAt}</div>
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