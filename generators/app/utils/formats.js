function formatDate(dateObj) { return dateObj ? `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}` : '' }

module.exports = { formatDate }