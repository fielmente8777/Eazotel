import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import './style/Carousal.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
   <Router>
    <App/>
    </Router>
    </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
