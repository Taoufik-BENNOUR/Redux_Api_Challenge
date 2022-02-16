import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {getUsers} from './redux/actions/userActions'
import UsersList from './components/UsersList';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Comments from './components/comments/Comments';
import UserPosts from './components/posts/UserPosts';

function App() {
  const [search, setsearch] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
    }, [])
    
  return (
    <>
    <Header setsearch={setsearch} />
    <Routes>
    <Route path='/' element={<UsersList search={search} />} />
    <Route path='/userPosts/:userI' element={<UserPosts />} />
    <Route path='userPosts/:userI/:postI' element={<Comments/>} />
    </Routes>
    </>
  );
}

export default App;
