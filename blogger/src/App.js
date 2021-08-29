import {Link,Route} from 'react-router-dom'
import UserDetail from './userDetail';
import UserShow from './UserShow'
import PostDetails from './PostDetails';
import PostShow from './PostShow';


function App() {
  return (
    <div className="container">
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </div>

      <Route path="/users" component={UserDetail} exact={true}></Route>
      <Route path="/posts" component={PostDetails} exact={true}></Route>
      <Route path="/users/:id" component={UserShow}></Route>
      <Route path="/posts/:id" component={PostShow}></Route>

    </div>
 
  );
}

export default App;
