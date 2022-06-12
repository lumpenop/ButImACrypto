import styles from './board.module.scss'

const head = ['No.', '아이디', '제목', '날짜', '조회수']
const body = [
  { num: 1, id: 'id', subject: 'subject', date: 'date', count: 1 },
  { num: 2, id: 'id2', subject: 'subject2', date: 'date2', count: 2 },
]
const Board = () => {
  return (
    <div className={styles.tableContainer}>
      <button type='button'>글쓰기</button>
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
