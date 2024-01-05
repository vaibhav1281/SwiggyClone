# Demo

<video>
    <source src="./src/assets/Swiggy _ Vaibhav Saroj -Desktop.mp4" type="video/mp4"/>
</video>


 To install the necessary dependencies for a React project using npm, follow these steps:

1. Open your terminal or command prompt and navigate to the root directory of your React project.

2. Run the following command to install `react-router-dom`:

```
npm install react-router-dom
```

This command will install the `react-router-dom` package and all of its dependencies.

3. Next, run the following command to install `react-responsive`:

```
npm i react-responsive
```

This command will install the `react-responsive` package and all of its dependencies.

Once both packages are installed, you can import them into your React components and use them to add routing and responsive design to your application.

Here is an example of how you might import and use `react-router-dom` in your `App.js` component:

```javascript
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
```

In this example, we are using `react-router-dom` to create a simple navigation bar with links to three different pages: Home, About, and Contact. When a user clicks on one of these links, the corresponding component will be rendered in the main content area of the application.

Here is an example of how you might import and use `react-responsive` in your `App.css` file:

```css
@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}

@media (min-width: 769px) {
  .container {
    width: 50%;
  }
}
```

In this example, we are using `react-responsive` to create a responsive layout for our application. The `.container


