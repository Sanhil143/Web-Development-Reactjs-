import React from "react";


const Posts = (props) => {
      return (
            <>
                  <div style={{padding:'20px',boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px',marginTop:'10px'}} >
                        <h3>{props.title}</h3>
                        <p style={{marginTop:'10px'}}>{props.body}</p>
                  </div>
            </>
      )
}
export default Posts;

