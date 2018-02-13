function addZero(number) { return ("0" + (number)).slice(-2) }

function valueOf(param) { return param || param >= 0 ? param : "" }

function formatMonth(dateObj) {
  return dateObj ? `${dateObj.getFullYear()}-${addZero(dateObj.getMonth() + 1)}` : ''
}

function formatTime(timeObj) {
  return timeObj ? `${addZero(timeObj.getHours())}:${addZero(timeObj.getMinutes())}` : ''
}

function formatDate(dateObj) {
  return dateObj ? `${dateObj.getFullYear()}-${addZero(dateObj.getMonth() + 1)}-${addZero(dateObj.getDate())}` : ''
}

function formatDateTime(dateObj) {
  return dateObj ? `${dateObj.getFullYear()}-${addZero(dateObj.getMonth() + 1)}-${addZero(dateObj.getDate())}T${addZero(dateObj.getHours())}:${addZero(dateObj.getMinutes() + 1)}` : ''
}

module.exports = { formatTime, formatMonth, formatDate, formatDateTime, valueOf }