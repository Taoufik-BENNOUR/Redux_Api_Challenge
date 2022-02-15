import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {getComments, getPosts, getUsers} from './redux/actions/userActions'
import UsersList from './components/UsersList';
import Header from './components/Header';
import { Route, Router, Routes } from 'react-router-dom';
import UserPosts from './components/UserPosts';
import Comments from './components/comments/Comments';

function App() {
  const [searchText, setsearch] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
    dispatch(getPosts())
    dispatch(getComments())
    }, [])
    
  return (
    <>
    <Header setsearch={setsearch} />
    <Routes>
    <Route path='/' element={<UsersList/>} />
    <Route path='/userPosts/:userI' element={<UserPosts/>} />
    <Route path='userPosts/:userI/:postI' element={<Comments/>} />
    </Routes>
    </>
  );
}

export default App;
