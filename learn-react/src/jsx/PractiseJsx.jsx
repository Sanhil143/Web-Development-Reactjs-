import React from 'react'

const PractiseJsx = () => {

      const link = 'https://www.google.com/';
      const formatName = (user) => {
            return user.firstName + ' ' + user.lastName;
      }
      const user = {
            firstName:'Sanhil',
            lastName:'Rai'
      };
      return (
            <div>
                  <h1>JSX content</h1>
                  <span>Hello {formatName(user)}</span><br/>
                  <a href={link} target='_blank'>click me</a>
            </div>
      )
}

export default PractiseJsx
