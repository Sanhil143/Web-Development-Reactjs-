import React, { useEffect, useState } from 'react'
import Posts from './Posts';

const getPost = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET'
      });
      return response.json();
}
const PostCard = () => {

      const [data,setData] = useState('');
     
      useEffect(() => {
            getPost().then((post) => setData(post));
      },[]);
      return (
            <>
            <div>
            {
                  data ? data.map((e) => <Posts title={e.title} body={e.body}/>) : <p>No Data</p>
            }
            </div>
            </>
      )
}

export default PostCard
