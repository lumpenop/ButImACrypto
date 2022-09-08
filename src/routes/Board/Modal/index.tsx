import ModalPortal from './Portal'

import styles from './modal.module.scss'

import { useState, FormEvent, ChangeEvent, Dispatch, SetStateAction, useRef, useEffect } from 'react'

import store from 'store'

import { BodyType } from 'routes/Board'

interface Props {
  setIsModal: Dispatch<SetStateAction<boolean>>
  isModal: boolean
  setBodyItems: Dispatch<SetStateAction<BodyType>>
}

const Modal = ({ setIsModal, isModal, setBodyItems }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const submitClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    store.set('board', { subject, content })
  }
  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.currentTarget.value)
  }

  const textareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value)
  }

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (isModal && !modalRef.current?.contains(e.target)) {
        setIsModal(false)
      }
    }
    document.addEventListener('mousedown', clickOutside)
    return () => {
      document.removeEventListener('mousedown', clickOutside)
    }
  }, [isModal])
  return (
    <ModalPortal>
      <div className={styles.modalContainer}>
        <div className={styles.modal} ref={modalRef}>
          <form onSubmit={submitClick}>
            <input
              onChange={inputChange}
              placeholder='제목'
              className={styles.modalSubject}
              type='text'
              value={subject}
            />
            <button className={styles.modalSubmit} type='submit'>
              작성완료
            </button>
            <textarea onChange={textareaChange} placeholder='내용' className={styles.modalContent} value={content} />
          </form>
        </div>
      </div>
    </ModalPortal>
  )
}

export default Modal
