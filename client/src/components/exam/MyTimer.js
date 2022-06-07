import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';

export function MyTimer({ expiryTimestamp }) {

  let navigate = useNavigate();
  const { seconds, minutes, } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  let inputStyle = {}

  if (minutes < 2) {
    inputStyle = {
      color: "red"
    }
  }
  

  function navigatePage() {
      if (minutes == 0 && seconds == 0) {
          navigate("/result")
      }
  }
  navigatePage()
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '40px' }}>
        <span style={inputStyle}>{minutes}:{seconds}</span>
      </div>
    </div>
  );
}