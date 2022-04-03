import React from 'react'
import { Modal, TextField, TextareaAutosize, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import FileBase64 from 'react-file-base64';
import { modalState$ } from '../../redux/selectors';
import { createPost, hideModal } from '../../redux/actions';
import useStyles from './styles';
const CreatePostModal = () => {
  const classes = useStyles();
  const { isShow } = useSelector(modalState$);
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    title: '',
    content: '',
    attachment: '',
  });
  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: '',
      content: '',
      attachment: '',
    });
  }, [dispatch]);
  const onSubmit = React.useCallback(() => {
    dispatch(createPost.createPostRequest(data));
    onClose();
  }, [data, dispatch, onClose]);
  const body = (
    <div className={classes.paper} id='simple-modal-title'>
      <h2>Create New Post</h2>
      <form noValidate autoComplete='off' className={classes.form}>
        <TextField
          className={classes.title}
          required
          label='Title'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={10}
          maxRows={15}
          placeholder='Content...'
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept='image/*'
          multiple={false}
          type='file'
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  )
}

export default CreatePostModal;