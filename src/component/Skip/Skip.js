import Link from 'next/link'
import styles from './Skip.module.css'

export default function Skip() {
  return (
    <ul id={styles.skip}>
      <li>
        <Link href="#header">
          <a title='본문 바로가기'>본문 바로가기</a>
        </Link>
      </li>
      <li>
        <Link href="#footer" >
          <a title='푸터 바로가기'>푸터 바로가기</a>
        </Link>
      </li>
    </ul>
  )
}
