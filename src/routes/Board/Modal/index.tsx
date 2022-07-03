import ModalPortal from './Portal'

import styles from './modal.module.scss'

import { useState, FormEvent, ChangeEvent } from 'react'

import store from 'store'

interface Props {
  setIsModal: Function
  setData: Function
  data: Board[]
}
interface Board {
  subject: string
  content: string
}

const Modal = ({ setIsModal, setData, data }: Props) => {
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const submitClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = store.get('board')

    if (result) {
      store.set('board', [...result, { subject, content }])
    } else {
      store.set('board', [{ subject, content }])
    }
    let num = data.length + 1
    setData([...data, { num, id: 'id3', subject, content, date: 'date', count: 0 }])
  }
  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.currentTarget.value)
  }

  const textareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value)
  }

  const cencelButtonClick = () => {
    setIsModal(false)
  }

  return (
    <ModalPortal>
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <button className={styles.cancelButton} type='button' onClick={cencelButtonClick}>
            x
          </button>
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
