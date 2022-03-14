import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentList from './CommentsList';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {sendRequest, status, data: loadedComment} = useHttp(getAllComments);
  const params = useParams();
  const {quoteid} = params;
  console.log(loadedComment);
  useEffect(() => {
    sendRequest(quoteid);
  }, [sendRequest, quoteid])
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addcommentHandler = useCallback(() => {
      sendRequest(quoteid);
  }, [sendRequest, quoteid])
  let comments;
  if (status==='pending'){
    comments = <div className='centered'><LoadingSpinner /></div>
  }
  if (status === 'completed' && (loadedComment && loadedComment.length > 0)){
    comments = <CommentList comments={loadedComment} />
  }

  if (status === 'completed' && (!loadedComment && loadedComment.length === 0)){
    comments = <p>No comments avaialable</p>
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddedComment={addcommentHandler} quoteid={params.quoteid}/>}
      {comments}
    </section>
  );
};

export default Comments;
