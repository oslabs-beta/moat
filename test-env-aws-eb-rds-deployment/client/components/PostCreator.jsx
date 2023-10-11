import * as React from 'react';
import { TOGGLE_POST_WINDOW } from '../reducers/forgeReducer.js';
// HOOKS
import { useDispatch } from 'react-redux';
// MUI COMPONENTS
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
// MISC
import postType from './../misc/postTypes.js';

const PostCreator = props => {
  const { postWindow, handlePostWindow, curPage } = props;
  const dispatch = useDispatch();
  const handleNewPost = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get('title');
    const description = data.get('description');
    const link = data.get('link');
    const contentType = data.get('content');
    const request = {
      title,
      type: contentType,
      category: curPage,
      link,
      description,
    };
    console.log(title, description, link, contentType);
    const serverResponse = await fetch(
      '/post/createpost',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      },
    ).catch(err => {
      console.log(err);
    });
    dispatch(TOGGLE_POST_WINDOW());
  };

  return (
    <div>
      <Dialog open={postWindow} onClose={handlePostWindow}>
        <DialogTitle>Create New Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter in the following information regarding your new post:
          </DialogContentText>
          <Box component='form' onSubmit={handleNewPost}>
            <TextField
              autoFocus
              margin='dense'
              id='title'
              name='title'
              label='Title'
              type='text'
              fullWidth
              required
              variant='standard'
            />
            <TextField
              autoFocus
              required
              margin='dense'
              id='description'
              name='description'
              label='Description'
              type='text'
              fullWidth
              minRows={3}
              multiline
              variant='standard'
            />
            <TextField
              autoFocus
              required
              margin='dense'
              id='link'
              name='link'
              label='Link'
              type='url'
              fullWidth
              variant='standard'
            />
            <TextField
              autoFocus
              required
              margin='dense'
              id='content'
              name='content'
              label='Content Type'
              type='url'
              fullWidth
              defaultValue={'article'}
              select
              helperText='Please select the type of content'
              variant='standard'>
              {postType.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <DialogActions>
              <Button onClick={handlePostWindow}>Cancel</Button>
              <Button type='submit'>Submit Post</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostCreator;
