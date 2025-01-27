
import s from "./Options.module.css"



const Options = ({updateFeedback, handleReset, total}) => {

  return (
    <div className={s.container}>
    <button onClick={() => updateFeedback("good")} className={s.btn}>Good</button>
    <button onClick={() => updateFeedback("neutral")} className={s.btn}>Neutral</button>
    <button onClick={() => updateFeedback("bad")} className={s.btn}>Bad</button>
    
    {total > 0 && <button onClick={handleReset} className={s.btn}>Reset</button>}
    </div>
  )
}

export default Options
