import AnswersList from './AnswersList.jsx'

import { useState } from "react";

function Main() {

  const initialAnswers = {
    colour: "",
    timeSpentSwimming: false,
    timeSpentBathing: false,
    timeSpentChatting: false,
    timeSpentNoTime: false,
    review: "",
    name: "",
    email: ""
  }

  const answersList = [answers]

  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState(initialAnswers)

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Survey submitted!", answers);

    setAnswers(initialAnswers);
  };

  const handleChange = (event) => {
    const targetValue = event.target.value;
    const targetName = event.target.name;
    const targetType = event.target.type;
    const targetChecked = event.target.checked;
    if (targetName === "color") {
      const newAnswersList = { ...answers, colour: targetValue };
      setAnswers(newAnswersList);
    }
    if (targetName === "spend-time-swimming") {
      const newAnswersList = { ...answers, timeSpentSwimming: targetChecked};
      setAnswers(newAnswersList);
    }
    if (targetName === "spend-time-bathing") {
      const newAnswersList = { ...answers, timeSpentBathing: targetChecked};
      setAnswers(newAnswersList);
    }
    if (targetName === "spend-time-chatting") {
      const newAnswersList = { ...answers, timeSpentChatting: targetChecked};
      setAnswers(newAnswersList);
    }
    if (targetName === "spend-time-notime") {
      const newAnswersList = { ...answers, timeSpentNoTime: targetChecked};
      setAnswers(newAnswersList);
    }
    if (targetName === "review") {
      const newAnswersList = { ...answers, review: targetValue};
      setAnswers(newAnswersList);
    }
    if (targetName === "name") {
      const newAnswersList = { ...answers, name: targetValue};
      setAnswers(newAnswersList);
    }
    if (targetName === "email") {
      const newAnswersList = { ...answers, email: targetValue};
      setAnswers(newAnswersList);
    }
  };

console.log(answers)


  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* <AnswersList answers={answers}/> */}
      </section>

      <section className="main__form">

        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input 
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  checked={answers.colour === "1"}
                  onChange={handleChange}/>
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={answers.colour === "2"}
                  onChange={handleChange}/>
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three" 
                  type="radio"
                  name="color"
                  value="3"
                  checked={answers.colour === "3"}
                  onChange={handleChange}/>
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={answers.colour === "4"}
                  onChange={handleChange}/>
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time-swimming"
                    type="checkbox"
                    value="timeSpentSwimming"
                    checked={answers.timeSpentSwimming}
                    onChange={handleChange}
                    />
                    Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-bathing"
                    type="checkbox"
                    value="timeSpentBathing" 
                    checked={answers.timeSpentBathing}
                    onChange={handleChange}
                    />
                    Bathing
                  </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-chatting"
                    type="checkbox"
                    value="timeSpentchatting"
                    checked={answers.timeSpentChatting}
                    onChange={handleChange}
                    />
                    Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-notime"
                    type="checkbox"
                    value="timeSpentNoTime"
                    checked={answers.timeSpentNoTime}
                    onChange={handleChange}
                    />
                    I don't like to spend time with it
                  </label>
              </li>
            </ul>
          </div>
          <label>What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={answers.review}
              onChange={handleChange}>
              </textarea>
          </label>
          <label>Put your name here (if you feel like it):
            <input
              type="text"
              name="name"
              value={answers.name}
              onChange={handleChange}
              />
          </label>
          <label>Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={answers.email}
              onChange={handleChange}
              />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      
      </section>
    </main>
  );
}

export default Main;
