import styles from './board.module.scss'
import { useState, MouseEvent, useEffect } from 'react'
import Modal from './Modal'

import store from 'store'

const head = ['No.', '아이디', '제목', '날짜', '조회수']

export type BodyType =
  | {
      num: number
      id: string
      subject: string
      date: string
      count: number
    }[]
  | null

const Board = () => {
  const [isModal, setIsModal] = useState(false)
  const [bodyItems, setBodyItems] = useState<BodyType | null>(null)

  // store get 'board' 후에 modal/index에서 const board = get('board'), set('board', {...board, subject: subject, content: content })
  useEffect(() => {
    setBodyItems(store.get('board'))
  }, [])

  const handleModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setIsModal((prev) => !prev)
  }

  return (
    <div className={styles.tableContainer}>
      <button className={styles.writeButton} type='button' onClick={handleModal}>
        글쓰기
      </button>
      {isModal && <Modal setIsModal={setIsModal} isModal={isModal} setBodyItems={setBodyItems} />}
      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr>
              {head.map((item) => {
                return <th key={item}>{item}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {bodyItems?.map((item, index) => {
              return (
                <tr key={item.date + index}>
                  <td>{index + 1}</td>
                  <td>{`id${index + 1}`}</td>
                  <td>{item.subject}</td>
                  <td>{item.date}</td>
                  <td>{index}</td>
                </tr>
                // <li key={item.num + index}>hi</li>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Board
