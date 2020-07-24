export default (min: string, max: string, breakpoint: string): string => {
  const breakpointVw = (parseInt(max, 10) * 100) / parseInt(breakpoint, 10);

  return `max(${min}, min(${max}, ${breakpointVw}vw))`;
};
