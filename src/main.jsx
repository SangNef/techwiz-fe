import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/index.jsx'
import { Provider } from 'react-redux'
import { loginSuccess } from './store/authSlice.jsx'

const token = localStorage.getItem('token');
if (token) {
  store.dispatch(loginSuccess({ token: token }));
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
