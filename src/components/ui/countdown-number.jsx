import { useEffect, useState } from 'react';
import NumberFlow from '@number-flow/react';
import { motion } from 'framer-motion';

const MotionNumberFlow = motion.create(NumberFlow);

function getTimeLeft(endDate, startDate) {
  const start = startDate ? new Date(startDate) : new Date();
  const difference = endDate.getTime() - start.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function AnimatedNumberCountdown({ endDate, startDate, className = '' }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(endDate, startDate));

  useEffect(() => {
    const calculateTimeLeft = () => setTimeLeft(getTimeLeft(endDate, startDate));

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate, startDate]);

  const units = [
    ['days', 'Days'],
    ['hours', 'Hours'],
    ['minutes', 'Minutes'],
    ['seconds', 'Seconds'],
  ];

  return (
    <div
      className={['countdown-clock', className].filter(Boolean).join(' ')}
      role="timer"
      aria-label="Time remaining until Sports Carnival"
    >
      {units.map(([unit, label], index) => (
        <div className="countdown-unit-wrap" key={unit}>
          {index > 0 && <span className="countdown-separator" aria-hidden="true">:</span>}
          <div className="countdown-unit">
            <MotionNumberFlow
              value={timeLeft[unit]}
              className="countdown-value"
              format={{ minimumIntegerDigits: 2 }}
            />
            <span className="countdown-unit-label">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
