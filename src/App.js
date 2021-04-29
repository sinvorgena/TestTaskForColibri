import logo from './logo.svg';
import s from './App.module.scss';
import card from './news_foto.jpg'


function App() {
  return (
    <div className={s.App}>
        <div className={s.card}>
            <h3 className={s.cardLabel}>Семантика в верстке</h3>
            <div className={s.content}>
                <div className={s.img}><img src={card} alt=""/></div>
                <div className={s.info}>
                    <h6 className={s.infoLabel}><a href="">htmlbook</a> - <span>5 января 2014</span></h6>
                    <p>Семантика дает представление о структуре документа и позволяет людям и программам более полно управлять данными. В HTML5 добавлено множество семантических тегов, а также поддержка RDFa, микроформаторов и микроданных ...</p>
                </div>
                <a href="" className={s.readMoreLink}>ЧИТАТЬ ДАЛЬШЕ</a>
            </div>

        </div>
        <div className={s.card}>
            <h3 className={s.cardLabel}>Семантика в верстке</h3>
            <div className={s.content}>
                <div className={s.img}><img src={card} alt=""/></div>
                <div className={s.info}>
                    <h6 className={s.infoLabel}><a href="">htmlbook</a> - <span>5 января 2014</span></h6>
                    <p>Семантика дает представление о структуре документа и позволяет людям и программам более полно управлять данными. В HTML5 добавлено множество семантических тегов, а также поддержка RDFa, микроформаторов и микроданных ...</p>
                </div>
                <a href="" className={s.readMoreLink}>ЧИТАТЬ ДАЛЬШЕ</a>
            </div>

        </div>
        <div className={s.card}>
            <h3 className={s.cardLabel}>Семантика в верстке</h3>
            <div className={s.content}>
                <div className={s.img}><img src={card} alt=""/></div>
                <div className={s.info}>
                    <h6 className={s.infoLabel}><a href="">htmlbook</a> - <span>5 января 2014</span></h6>
                    <p>Семантика дает представление о структуре документа и позволяет людям и программам более полно управлять данными. В HTML5 добавлено множество семантических тегов, а также поддержка RDFa, микроформаторов и микроданных ...</p>
                </div>
                <a href="" className={s.readMoreLink}>ЧИТАТЬ ДАЛЬШЕ</a>
            </div>

        </div>
        <div className={s.card}>
            <h3 className={s.cardLabel}>Семантика в верстке</h3>
            <div className={s.content}>
                <div className={s.img}><img src={card} alt=""/></div>
                <div className={s.info}>
                    <h6 className={s.infoLabel}><a href="">htmlbook</a> - <span>5 января 2014</span></h6>
                    <p>Семантика дает представление о структуре документа и позволяет людям и программам более полно управлять данными. В HTML5 добавлено множество семантических тегов, а также поддержка RDFa, микроформаторов и микроданных ...</p>
                </div>
                <a href="" className={s.readMoreLink}>ЧИТАТЬ ДАЛЬШЕ</a>
            </div>

        </div>
        <div className={s.card}>
            <h3 className={s.cardLabel}>Семантика в верстке</h3>
            <div className={s.content}>
                <div className={s.img}><img src={card} alt=""/></div>
                <div className={s.info}>
                    <h6 className={s.infoLabel}><a href="">htmlbook</a> - <span>5 января 2014</span></h6>
                    <p>Семантика дает представление о структуре документа и позволяет людям и программам более полно управлять данными. В HTML5 добавлено множество семантических тегов, а также поддержка RDFa, микроформаторов и микроданных ...</p>
                </div>
                <a href="" className={s.readMoreLink}>ЧИТАТЬ ДАЛЬШЕ</a>
            </div>

        </div>
    </div>
  );
}

export default App;
