import { FC } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import theme from './theme'
import Layout from 'components/Layout'

const Home = () => <div>Did you follow the <h2>WHITE RABBIT</h2>?</div>
const Publications = () => <div><h2>Publications</h2></div>
const WorkFlows = () => <div><h2>Workflows</h2></div>
const About = () => <div> <h2>ABOUT</h2></div>
const Contacts = () => <div> <h2>CONTACTS</h2></div>

const NoMatch = () => (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
)

const AppRoutes = () => <Routes>
    <Route path="/" element={<Layout/> }>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="publications" element={<Publications />} />
        <Route path="workflows" element={<WorkFlows />} />
        <Route path="contacts" element={<Contacts />} />
    </Route>
    <Route path="*" element={<NoMatch />} />
</Routes>

const App: FC = () => <ThemeProvider theme={theme}>
    <CssBaseline />
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    </ThemeProvider>

export default App
