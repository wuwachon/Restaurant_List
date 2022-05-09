// raw data
const restaurantList = require('./restaurant.json')
// require modules
const express = require('express')
const exphbs = require('express-handlebars')
const { render } = require('express/lib/response')
const app = express()
const port = 3000
// view engine setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// bootstrap, popper, and some other stylesheet for use
app.use(express.static('public'))

// render view panel
// initial page
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantList.results})
})
// search restaurant by keyword
app.get('/search/', (req, res) => {
  const restaurants = restaurantList.results.filter(restaurant => restaurant.name.toLowerCase().includes(req.query.keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(req.query.keyword.toLowerCase()))
  if(restaurants.length === 0) return res.render('searchnone', { keyword: req.query.keyword })
  res.render('index', { restaurant: restaurants, keyword: req.query.keyword })
})
// restaurant detail
app.get('/restaurants/:id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.id)

  res.render('show', { restaurant: restaurant })
})

// port listen
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
