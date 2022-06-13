import { PencilLine  } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
             className={styles.cover} 
             src="https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=50&w=200" alt="" 
            />

         <div className={styles.profile}>
            <Avatar src="https://github.com/pedrovinhas.png"/>

            <strong>
                Pedro Henrique Vinhas
            </strong>
            <span> Web Developer </span>
         </div>


         <footer>
             <a href="#">
                 <PencilLine size={20} />
                 Editar seu perfil
             </a>
         </footer>
        </aside>
    )
}