module.exports = (req, res) => {
  const { id = undefined } = req.query
  if (id) {
    res.json({
      '1': { 'rating': 51, 'times_all': 2, 'times_month': 2, 'date': '2018-12-08' },
      '2': { 'rating': 39, 'times_all': 2, 'times_month': 2, 'date': '2018-12-08' },
      '3': { 'rating': 24, 'times_all': 1, 'times_month': 1, 'date': '2018-12-08' },
      '4': { 'rating': 10, 'times_all': 1, 'times_month': 1, 'date': '2018-12-08' },
      '5': { 'rating': 19, 'times_all': 1, 'times_month': 1, 'date': '2018-12-09' },
      '6': { 'rating': 18, 'times_all': 1, 'times_month': 1, 'date': '2018-12-08' },
      '7': { 'rating': 107, 'times_all': 5, 'times_month': 5, 'date': '2018-12-10' }
    })
  } else {
    res.json(['1', '2222', '333'])
  }
}
