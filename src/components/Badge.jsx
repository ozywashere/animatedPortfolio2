"use client";
import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-4 justify-between w-full">
        <div className="text-4xl text-primary font-bold flex-1">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium ">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
