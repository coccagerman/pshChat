import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContextProvider from './context/ContextProvider'
import Main from './components/Main/Main'
import CreateNewChat from './components/CreateNewChat/CreateNewChat'

const App: React.FC = () => {
    return (
        <ContextProvider>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Main />
                    </Route>

                    <Route path='/createNewChat'>
                        <CreateNewChat />
                    </Route>
                </Switch>
            </Router>
        </ContextProvider>
    )
}

export default App
