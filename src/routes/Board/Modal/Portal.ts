import { createPortal } from 'react-dom'
import React from 'react'

interface IPortal {
  children?: React.ReactNode
}

const ModalPortal = ({ children }: IPortal) => {
  const el = document.getElementById('modal')
  return createPortal(children, el!)
}

export default ModalPortal
