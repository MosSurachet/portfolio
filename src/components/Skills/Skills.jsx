import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaHtml5, FaGitAlt, FaNode, FaPython, FaCss3, FaPhp} from 'react-icons/fa6'

function Skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li>
            <FaSquareJs />
        </li>
        <li>
            <FaReact />
        </li>
        <li>
          <FaPython />
        </li>
        <li>
          <FaHtml5 />
        </li>
        <li>
          <FaCss3 />
        </li>
        <li>
          <FaPhp />
        </li>
        <li>
            <FaGitAlt />
        </li>
        <li>
            <FaNode />
        </li>
      </ul>
    </div>
  )
}

export default Skills
