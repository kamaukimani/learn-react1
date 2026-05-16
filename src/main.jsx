import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import BlogPost from './components/BlogPost'
import App1 from './components/App1'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <BlogPost /> */}
    <App1 />
  </StrictMode>,
)
