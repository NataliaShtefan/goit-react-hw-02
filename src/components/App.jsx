
import './App.module.css'
import Description from './Description/Description'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'
import Options from './Options/Options'
import { useState } from 'react'

const App = () => {

// 
const [feedback, setFeedback] = useState({
  good: 0,
  neutral: 0,
  bad: 0
});

// 


const updateFeedback = feedbackType => {
  setFeedback(prevFeedback => ({
    ...prevFeedback,
    [feedbackType]: prevFeedback[feedbackType] + 1
  }))};



  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

const hendleReset = () => {
  setFeedback({ 
    good: 0,
    neutral: 0,
    bad: 0})
}

  return (
    <>
      < Description />
      < Options updateFeedback={updateFeedback} hendleReset={hendleReset} total={totalFeedback}/>
      {totalFeedback > 0 ? (
      < Feedback 
      good={feedback.good} 
      neutral={feedback.neutral}
      bad={feedback.bad} 
      total={totalFeedback}/> ) : (
        < Notification message="No feedback given" />
       ) }
    </>
  )



}

export default App
