import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';


export function Comment(){
    return(
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/gabrielevanger.png" alt="" />

        <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Evangelista</strong>
                            <time title="11 de abril ás 17:38h" dateTime="2023-04-11  17:38:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>


                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                 <footer>
                     <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                     </button>
                 </footer>
        </div>


    </div>

    )
}