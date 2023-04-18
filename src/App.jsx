import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css'

import './global.css'


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        < Sidebar />
        <main>
          <Post
              author="Gabriel Evangelista"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, possimus nam ab laborum quidem repellat minima ipsam animi aperiam saepe ducimus deserunt in laudantium sunt illum quod accusantium. Sed, minus."
             />
          <Post 
              author="Gabriel Buzzi"
              content="Um novo post muito legal"
             />        
        </main>
      </div>
    </div>
  )
}