import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/layout/css/all.css'
import '../src/layout/css/css.css'
import '../src/layout/css/elegant-font.css'
import '../src/layout/css/font-awesome.css'
import '../src/layout/css/page-builder.css'
import '../src/layout/css/rs6.css'
import '../src/layout/css/style-core.css'
import '../src/layout/css/style.min4.css'
import '../src/layout/css/style1.css'
import '../src/layout/css/style2.css'
import '../src/layout/css/style3.css'
import '../src/layout/css/tourmaster-global-style-custom.css'
import '../src/layout/css/tourmaster-room-style-custom.css'
import '../src/layout/css/tourmaster-room.css'
import '../src/layout/css/tourmaster-style-custom.css'
import '../src/layout/css/tourmaster.css'
import '../src/layout/css/traveltour-style-custom.css'
import '../src/layout/css/wc-blocks.css'
import '../src/layout/css/woocommerce-layout.css'
import '../src/layout/css/woocommerce-smallscreen.css'
import '../src/layout/css/woocommerce.css'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
