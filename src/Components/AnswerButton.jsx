import '../Sass/components/AnswerButton.scss';
import wrongSound from '../Sounds/wrong.mp3';
import correctSound from '../Sounds/correct.mp3';
import useSound from 'use-sound';

const AnswerButton = ({ color, answer, setQuestionNb, changeToGray, setBaseColors, setScore, setQuestionIncrement, disableButton, setDisableButton }) => {

  const [correct] = useSound(correctSound);
  const [wrong] = useSound(wrongSound);

  const submitAnswer = () => {
        answer[1] === true ? setScore(prevScore => prevScore + 1) : console.log('FAUX');
        answer[1] === true ? correct() : wrong();
        setDisableButton(true)
        changeToGray();
        setTimeout(() => {
            setQuestionNb(prev => prev + 1 );
            setBaseColors(["red", "blue", "orange", "green"]);
            setQuestionIncrement(prevState => prevState + 1);  
            setDisableButton(false);
        }, 3000)         
  }
  return (
        <>
        <button disabled={disableButton} className={ `AnswerButton ${color}`} onClick={submitAnswer}>{answer[0]}</button>
      </>
)};

export default AnswerButton;