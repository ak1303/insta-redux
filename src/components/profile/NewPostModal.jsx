import createPostThunk from '../../redux/thunk/postThunk/createPostThunk';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

const NewPostModal = ({open,setIsModalOpen}) => {

 const dispatch = useDispatch();
 const createNewPost = (data) =>{//send title,content, image urls
    dispatch(createPostThunk(data));
 }
 const handleClose = () => {
    setIsModalOpen(false);
 }
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const title = formJson.title;
            const content = formJson.content;
            const imageUrls = formJson.imageUrls;
            const data = {title, content, imageUrls}
            createNewPost(data);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add New Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter all details to create new post
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="content"
            name="content"
            label="Content"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="imageUrls"
            label="Image url"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setIsModalOpen(false)}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default NewPostModal