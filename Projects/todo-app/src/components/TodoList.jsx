import React from 'react'

const TodoList = () => {
      return (
            <>
                  <li className='todo-item'>
                        <span>
                              <input type='checkbox' />
                              <span className='todo-item-text'>Eat</span>
                        </span>
                        <p>...</p>
                  </li>
            </>
      )
}

export default TodoList
