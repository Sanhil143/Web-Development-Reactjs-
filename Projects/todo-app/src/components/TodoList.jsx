import React from 'react'

const TodoList = (props) => {
      return (
            <>
                  <li className='todo-item'>
                        <span>
                              <input type='checkbox' />
                              <span className='todo-item-text'>{props.li}</span>
                        </span>
                        <p>...</p>
                  </li>
            </>
      )
}

export default TodoList
