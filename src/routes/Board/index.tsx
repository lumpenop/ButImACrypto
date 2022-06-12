import styles from './board.module.scss'
import { useState, MouseEvent } from 'react'
import ModalPortal from './Modal/Portal'
import Modal from './Modal'

const head = ['No.', '아이디', '제목', '날짜', '조회수']
const body = [
  { num: 1, id: 'id', subject: 'subject', date: 'date', count: 1 },
  { num: 2, id: 'id2', subject: 'subject2', date: 'date2', count: 2 },
]
const Board = () => {
  const [isModal, setIsModal] = useState(false)

  const handleModal = (event: MouseEvent) => {
    setIsModal((prev) => !prev)
  }
  return (
    <div className={styles.tableContainer}>
      <button type='button' onClick={handleModal}>
        글쓰기
      </button>
      <ModalPortal>{isModal && <Modal />}</ModalPortal>
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
            {body.map((item) => {
              return (
                <tr key={item.date}>
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
