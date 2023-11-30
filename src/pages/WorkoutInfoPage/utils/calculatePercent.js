export const calculatePercentage = (count, total) => {
  if (count >= total) {
    return 100
  } else {
    return Math.round((count / total) * 100)
  }
}
