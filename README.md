# React Router Tutorial

# Install the create-react-app CLI
```
npm install -g create-react-app
```

# Create the app with create-react-app CLI
```bash
# create with create-react-app PROJECT_NAME
create-react-app router-example
# change into the router-example directory
cd router-example

```

# Install React Router dependancy
```
npm i react-router --save # install dev
```

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

```jsx
/* /src/index.js */
<Router history={browserHistory}>
  <Route path="/" component={Root}>
  </Route>
</Router>
```

# add index component
```jsx
/* /src/index.js */
<Router history={browserHistory}>
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
  </Route>
</Router>
```

# add params example
```jsx
/* /src/index.js */
<Router history={browserHistory}>
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="/post/:id" component={ParamsExample} />
  </Route>
</Router>
```

# Add query example
```jsx
/* /src/index.js */
<Router history={browserHistory}>
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="/post/:id" component={ParamsExample} />
    <Route path="/query" component={QueryExample} />
  </Route>
</Router>
```

# add programmatic routing example
```jsx
/* /src/index.js */
<Router history={browserHistory}>
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="/post/:id" component={ParamsExample} />
    <Route path="/query" component={QueryExample} />
    <Route path="programmatic" component={ProgrammaticExample} />
  </Route>
</Router>
```

# add 404
```jsx
/* /src/index.js */
<Router history={browserHistory}>
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="/post/:id" component={ParamsExample} />
    <Route path="/query" component={QueryExample} />
    <Route path="*" component={FourOFour}/>
  </Route>
</Router>
```

# Add `<Link>` Component

# Programatic Routing

```
use history.go
```
