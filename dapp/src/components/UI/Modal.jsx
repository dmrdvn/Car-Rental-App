import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'



const Overlay = (props) => {
    return <div className='md:p-4 rounded-xl shadow-2xl p-4 w-[60vw]-auto h-[60vh]  overflow-y-scroll overflow-hidden overscroll-contain   z-30 fixed left-[25%] top-[30%] md:top-[30%] md:left-[30%] md:w-[40%]  bg-white'>
        <div className='content'>{props.children}</div>
    </div>
}
const BackDrop = (props) => {
    return <div onClick={props.close} className='bg-black opacity-75 top-0 left-0 z-20  fixed w-[100%] h-[100%] bg-[ rgba(0, 0, 0, 0.75)]'>
      {props.children}
    </div>
}

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop close={props.close}/>, document.getElementById('overlay-root'))}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay-root'))}
    </Fragment>
  )
}

export default Modal
