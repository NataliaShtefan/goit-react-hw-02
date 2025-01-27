
import './App.module.css'
import Description from './Description/Description'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'
import Options from './Options/Options'
import { useState, useEffect } from 'react'

const App = () => {

// 
const [feedback, setFeedback] = useState(() => {
  const savedFeedback = localStorage.getItem('feedback');
  return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
});


// 
useEffect(() => {
  localStorage.setItem('feedback', JSON.stringify(feedback));
}, [feedback]);

const updateFeedback = feedbackType => {
  setFeedback(prevFeedback => ({
    ...prevFeedback,
    [feedbackType]: prevFeedback[feedbackType] + 1
  }))};



  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round((feedback.good / totalFeedback) * 100);



const handleReset = () => {
  setFeedback({ 
    good: 0,
    neutral: 0,
    bad: 0})
}


  return (
    <>
      < Description />
      < Options updateFeedback={updateFeedback} handleReset={handleReset} total={totalFeedback}/>
      {totalFeedback > 0 ? (
      < Feedback 
      good={feedback.good} 
      neutral={feedback.neutral}
      bad={feedback.bad} 
      total={totalFeedback}
      positive={positive}/> ) : (
        < Notification message="No feedback given" />
       ) }
    </>
  )



}

export default App
