import React, { useState } from 'react'
import EmojiPicker  from 'emoji-picker-react'


const EmojiBar = () => {
      const [serachEmoji, setSearchEmoji] = useState('');

      const handleSearch = (e) => {
            setSearchEmoji(e.target.value);
      }
  return (
    <div>
      <h1>Emoji Search</h1>
      <EmojiPicker  emojiStyle='apple' style={{width:'100%'}} emoji={serachEmoji} onChange={handleSearch}/>
    </div>
  )
}

export default EmojiBar
