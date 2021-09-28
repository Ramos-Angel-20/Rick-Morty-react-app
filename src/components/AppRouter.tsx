import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import IndexPage from '../pages/IndexPage';
import CharacterPage from '../pages/CharacterPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={IndexPage} />
                <Route path="/character/:characterId" component={CharacterPage} />
                <Redirect to='/'/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;