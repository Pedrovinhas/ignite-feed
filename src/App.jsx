import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
       <Sidebar/>
        </aside>
     
      <main>
      <Post 
        author="Pedro Henrique Vinhas" 
        content="Muito feliz em estar fazendo o curso Ignite!"
      />
      </main>
      </div>
    </div>
  )
}
