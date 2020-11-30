import React from 'react'

const Controls = () => {
  const minimize = () => {
    window.AppAPI.minimizeWindow()
  }

  const maximize = () => {
    window.AppAPI.maximizeWindow()
    document.querySelector('.max-button').style.display = 'none'
    document.querySelector('.restore-button').style.display = 'flex'
  }

  const unmaximize = () => {
    window.AppAPI.unmaximizeWindow()
    document.querySelector('.max-button').style.display = 'flex'
    document.querySelector('.restore-button').style.display = 'none'
  }

  const close = () => {
    window.AppAPI.closeWindow()
  }

  if (!window.AppAPI.isWindows()) return null

  return (
    <div className="controls">
      <div className="control min-button" onClick={minimize}>
        <span>&#xE921;</span>
      </div>
      <div className="control max-button" onClick={maximize}>
        <span>&#xE922;</span>
      </div>
      <div className="control restore-button" onClick={unmaximize}>
        <span>&#xE923;</span>
      </div>
      <div className="control close-button" onClick={close}>
        <span>&#xE8BB;</span>
      </div>
    </div>
  )
}

export default Controls
