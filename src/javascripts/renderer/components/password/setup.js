import { ipcRenderer } from 'electron'
import React from 'react'

export default () => {
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      ipcRenderer.send('setup:done', event.currentTarget.value)
    }
  }

  return (
    <div className="lock-screen">
      <div className="top-lock">
        <img src="images/lock_icon.png" alt="" width="100" />
      </div>
      <div className="bottom-lock">
        <div className="masterpass-input">
          <input
            type="password"
            placeholder="Setup Master Password"
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  )
}