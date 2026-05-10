import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import BlogPost from './components/BlogPost'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BlogPost />
  </StrictMode>,
)
