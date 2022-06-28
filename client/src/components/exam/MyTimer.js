import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';

export function MyTimer({ expiryTimestamp }) {

  let navigate = useNavigate();
  const { seconds, minutes, } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  let inputStyle = {}

  if (minutes < 2) {
    inputStyle = {
      color: "red",
      fontSize:"15px"
    }
  }
  

  function navigatePage() {
      if (minutes == 0 && seconds == 0) {
          navigate("/result")
      }
  }
  navigatePage()

  const formatTime = (time) => {
    return String(time).padStart(2, '0')
  }
  
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <span style={inputStyle}>Left Time : {formatTime(minutes)}:{formatTime(seconds)}</span>
      </div>
    </div>
  );
}