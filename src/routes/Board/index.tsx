import styles from './board.module.scss'
import { useEffect, useMemo, useState } from 'react'
import ModalPortal from './Modal/Portal'
import Modal from './Modal'
import store from 'store'

const head = ['No.', '아이디', '제목', '날짜', '조회수']
const body = [
  { num: 1, id: 'id', subject: 'subject', content: 'content', date: 'date', count: 1 },
  { num: 2, id: 'id2', subject: 'subject2', content: 'content', date: 'date2', count: 2 },
]

interface Board {
  subject: string
  content: string
}
const Board = () => {
  const [isModal, setIsModal] = useState(false)
  const [data, setData] = useState(body)

  useEffect(() => {
    const result: Board[] = store.get('board')
    if (!result) return
    const arr = [...body]
    let num = body.length + 1
    result.forEach((item) => {
      arr.push({ num, id: 'id3', subject: item.subject, content: item.content, date: 'date', count: 0 })
      num += 1
    })
    setData(arr)
  }, [])

  const deleteItem = (index: number) => {
    const result = data.filter((_, idx) => {
      return idx !== index
    })
    store.remove('board')
    store.set('board', result)
    setData(result)
  }

  const handleModal = () => {
    setIsModal((prev) => !prev)
  }

  const tBody = useMemo(
    () =>
      data.map((item, index) => {
        return (
          <tr key={item.date + index}>
            <td>{item.num}</td>
            <td>{item.id}</td>
            <td>{item.subject}</td>
            <td>{item.date}</td>
            <td>{item.count}</td>
            <td>
              <button type='button' onClick={() => deleteItem(index)}>
                x
              </button>
            </td>
          </tr>
        )
      }),
    [data]
  )

  return (
    <div className={styles.tableContainer}>
      <button type='button' onClick={handleModal}>
        글쓰기
      </button>
      <ModalPortal>{isModal && <Modal data={data} setData={setData} setIsModal={setIsModal} />}</ModalPortal>
      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr>
              {head.map((item, index) => {
                return <th key={item + index}>{item}</th>
              })}
            </tr>
          </thead>
          <tbody>{tBody}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Board
