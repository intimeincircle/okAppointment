export const insertDashUUID = (sb: string): string => {
  const sb1 = Array.from(sb);
  // return sb;
  sb1.splice(8, 0, '-');
  sb1.splice(13, 0, '-');
  sb1.splice(18, 0, '-');
  sb1.splice(23, 0, '-');
  return sb1.join('');
};
