import { FC } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'

const AppRoutes = () => <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="publications" element={<Publications />} />
    <Route path="workflows" element={<WorkFlows />} />
    <Route path="*" element={<NoMatch />} />
    </Route>
</Routes>

const Layout = () => (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">White Rabbit</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/publications">Publications</Link>
            </li>
            <li>
              <Link to="/workflows">WorkFlows</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Outlet />
      </div>
)

const Home = () => <div>Did you follow the <h2>WHITE RABBIT</h2>?</div>
const Publications = () => <div><h2>Publications</h2></div>
const WorkFlows = () => <div><h2>Workflows</h2></div>
const About = () => <div> <h2>ABOUT</h2></div>

const NoMatch = () => (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
)

const App: FC = () => <BrowserRouter><AppRoutes /></BrowserRouter>

export default App
