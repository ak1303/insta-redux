import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import addCommentForPost from '../../redux/thunk/postThunk/addCommentThunk';
import { useDispatch } from 'react-redux';
import fetchComments from '../../redux/thunk/postThunk/fetchCommentsThunk';

export default function NewCommentModal({postId, isOpen, setIsOpen}) {
  
  const handleClose = () => {
    setIsOpen(false);
  };
  const dispatch = useDispatch();
  const addComment = async (comment) => {
    console.log('dispatching new comment');
    await addCommentForPost(postId,comment);
    dispatch(fetchComments(postId));
  }
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const comment = formJson.comment;
            console.log(comment);
            addComment(comment)
            handleClose();
          },
        }}
      >
        <DialogTitle>Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Post new comment
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="comment"
            label=""
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
