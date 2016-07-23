
npm i react-router --save # install dev

# Refactor App

We need to refactor how the application serves components

Create a Root.js file in /src

```jsx
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Home } from '../../Containers'

export default class Root extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
```

this.props.children is dynamic and will serve the correct component that matches our route config step

# Create routes in ReactDOM.render

```
<Router history={browserHistory}>
  <Route path="/" component={Root}>
  </Route>
</Router>
```

# add index component
```
<Router history={browserHistory}>
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
  </Route>
</Router>
```

# add params example
```
<Router history={browserHistory}>
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="/post/:id" component={ParamsExample} />
  </Route>
</Router>
```

# Add query example
```
<Router history={browserHistory}>
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="/post/:id" component={ParamsExample} />
    <Route path="/query" component={QueryExample} />
  </Route>
</Router>
```

# add 404
```
<Router history={browserHistory}>
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="/post/:id" component={ParamsExample} />
    <Route path="/query" component={QueryExample} />
    <Route path="*" component={FourOFour}/>
  </Route>
</Router>
```