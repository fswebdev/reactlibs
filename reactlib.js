//Before react query
const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await fetch(url);
        setData(result.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  
  return {data , isLoading , isError}
}
//After react query
import { useQuery } from 'react-query'

const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(url).then(res =>res.json()
  )
)
//without react hook form

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({email, password});
  }
  
  return (
    <form onSubmit={handleSubmit}>
    
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
    </form>
  );
}
//with react form
function LoginForm() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      <input {...register("password")} />
      <input type="submit" />
    </form>
  );
}
//react window - manual rendering 
import React, {useEffect, useState} from 'react';

const names = [] // 1000 names

export const LongList = () => {

    return <div> 
      {names.map(name => <div> Name is: {name} </div>)} 
    <div/>
}
//using react window
import { FixedSizeList as List } from 'react-window';
 
const Row = ({ index, style }) => <div style={style}> Name is {names[index]}</div>
 
const LongList = () => (
  <List
    height={150}
    itemCount={1000}
    itemSize={35}
    width={300}
  >
    {Row}
  </List>
);
//without lazy load
import React from 'react';

const ImageList = () => {
  
  return <div>
    <img src ='image1.png' />
    <img src ='image2.png' />
    <img src ='image3.png' />
    <img src ='image4.png' />
    <img src ='image5.png' />
  </div>
}
//with lazy load
import React from 'react';
import LazyLoad from 'react-lazyload';


const ImageList = () => {
  
  return <div>
    <LazyLoad> <img src ='image1.png' /> <LazyLoad>
    <LazyLoad> <img src ='image2.png' /> <LazyLoad>
    <LazyLoad> <img src ='image3.png' /> <LazyLoad>
    <LazyLoad> <img src ='image4.png' /> <LazyLoad>
    <LazyLoad> <img src ='image5.png' /> <LazyLoad>
  </div>
}
//why did you render
import React, {useState} from 'react'

const WhyDidYouRenderDemo = () => {
    console.log('render')
    
    const [user , setUser] = useState({})
    const updateUser = () => setUser({name: 'faisal'})

    return <>
        <div > User is : {user.name}</div>
        <button onClick={updateUser}> Update </button>
    </>
}

export default WhyDidYouRenderDemo
//reselect
import { createSelector } from 'reselect'

const shopItemsSelector = state => state.shop.items

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((subtotal, item) => subtotal + item.value, 0)
)

const exampleState = {
  shop: {
    items: [
      { name: 'apple', value: 1.20 },
      { name: 'orange', value: 0.95 },
    ]
  }
}
//normalequal.js
const user1 = {
    name:'faisal'
}
const user2 ={
    name:'faisal'
}

const normalEqual = user1 === user2 // false
//deepequal.js
var equal = require('deep-equal');

const user1 = {
    name:'faisal'
}
const user2 ={
    name:'faisal'
}

const deepEqual = equal(user1 , user2); // true -> exactly what we wanted!

    
