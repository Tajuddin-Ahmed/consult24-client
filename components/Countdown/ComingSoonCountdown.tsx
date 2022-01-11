const ComingSoonCountdown = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <div id='timer' className='flex-wrap d-flex justify-content-center'>
        <div
          id='days'
          className='align-items-center flex-column d-flex justify-content-center'
        >
          {' '}
          {days} <span>DAYS</span>
        </div>
        <div
          id='hours'
          className='align-items-center flex-column d-flex justify-content-center'
        >
          {hours} <span>HOURS</span>
        </div>
        <div
          id='minutes'
          className='align-items-center flex-column d-flex justify-content-center'
        >
          {minutes} <span>MINUTES</span>
        </div>
        <div
          id='seconds'
          className='align-items-center flex-column d-flex justify-content-center'
        >
          {seconds} <span>SECONDS</span>
        </div>
      </div>
    </>
  );
};

export default ComingSoonCountdown;
