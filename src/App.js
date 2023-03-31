// import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css'; // or 'antd/dist/antd.less'
import { BrowserRouter as Router } from "react-router-dom";
import { main as mainConfig } from "./router/router";
import { RenderRoutes } from "./router/allocation";


function App () {
  return (
    <Router>
      <div className="App">
        <RenderRoutes routes={mainConfig}></RenderRoutes>
      </div>
    </Router>
  );
}

export default App;