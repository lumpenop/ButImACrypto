import styles from './board.module.scss'
import { useState, MouseEvent, useRef, RefObject } from 'react'
import Modal from './Modal'

const head = ['No.', '아이디', '제목', '날짜', '조회수']
const body = [
  { num: 1, id: 'id', subject: 'subject', date: 'date', count: 1 },
  { num: 2, id: 'id2', subject: 'subject2', date: 'date2', count: 2 },
]

export type BodyType = {
  num: number
  id: string
  subject: string
  date: string
  count: number
}[]

const Board = () => {
  const [isModal, setIsModal] = useState(false)
  const [bodyItems, setBodyItems] = useState<BodyType>(body)

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
            {bodyItems.map((item, index) => {
              return (
                <tr key={item.date + index}>
                  <td>{item.num}</td>
                  <td>{item.id}</td>
                  <td>{item.subject}</td>
                  <td>{item.date}</td>
                  <td>{item.count}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Board
