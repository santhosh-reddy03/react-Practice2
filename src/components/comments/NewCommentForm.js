import { Fragment, useEffect, useRef } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const {sendRequest, status, error} = useHttp(addComment)
  const {onAddedComment} = props
  
  useEffect(()=>{
    if(status==='completed' && !error){
      onAddedComment();
    }
  }, [status, error, onAddedComment])
  const submitFormHandler = (event) => {
    event.preventDefault();
    const textValue = commentTextRef.current.value;
    console.log(textValue)  
    // optional: Could validate here

    // send comment to server
    sendRequest({commentData: { text: textValue }, quoteId: props.quoteid});
  };

  return (
    <Fragment>
      {status==='pending' && <div className='centered'><LoadingSpinner /></div>}
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
    </Fragment>
  );
};

export default NewCommentForm;
