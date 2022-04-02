import {useDispatch} from 'react-redux';
import * as actions from './redux/actions';
function App() {
  const dispatch = useDispatch();
  dispatch(actions.getPosts.getPostsRequest());
  return (
   
    <div className="App">
      <h1>This is blog app</h1>
    </div>
  );
}

export default App;
