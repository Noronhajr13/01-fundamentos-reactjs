import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego</strong>
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
