

const Progress = ({ value, max, min = 0 }) => {
  return <div>
    <div className="progress">
        <div className="progress-bar bg-primary" role="progressbar" style={{
            width: value+"%"
        }}
            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>;
};

export default Progress;
