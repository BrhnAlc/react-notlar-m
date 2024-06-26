
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './App/Store';
import AppRouter from './router/AppRouter.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
)
