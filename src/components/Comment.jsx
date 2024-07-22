import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/noronhajr13.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Claudio Noronha Jr.</strong>
              <time title="22/06/2024 as 12:22h" dateTime="2024-07-22 12:22:00">
                Comentado há 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
              Aplaudir<span>50</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
