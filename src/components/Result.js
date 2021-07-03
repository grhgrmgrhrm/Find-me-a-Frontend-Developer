import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <h3>На основании ваших ответов получен результат:</h3> <br/>
        {props.quizResult}<br/>
        <p>Кстати, этот опросник сделан на React =) Может быть, вы хотите поговорить об этом?</p>
        <button
            className="button-red"
            type="button"
            onClick={(e) => {
              e.preventDefault();
                window.location.reload();
            }}
        > Спасибо, я пройду тест еще раз
        </button>
        <button
            className="button-green"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.linkedin.com/in/raman-shastapalau/', '_blank');
            }}
          > Да, давайте знакомиться
        </button>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
