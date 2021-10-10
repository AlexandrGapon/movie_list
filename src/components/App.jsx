import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import '../styles/App.css'
import { LOAD_MOVIES } from '../store/reducers/movies/actions'
import MainPage from '../pages/MainPage'
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom'
import CommentsPage from '../pages/CommentsPage'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: LOAD_MOVIES,
      payload: {
        page: 1,
        limit: 10
      }
    })
  }, [dispatch])

  return (
    <div className='app'>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/comments/:id' component={CommentsPage} />
          <Redirect to='/' />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
