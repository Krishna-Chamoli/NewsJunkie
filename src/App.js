import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;

  constructor() {
    super();
    this.state = {
      mode: {
        mode: "light",
        style: null
      },
      btnText: "Enable Dark Mode",
      progress: 0,
      pageSize: 9
    }
  }

  handleMode = (e) => {
    if (e.target.checked) {
      this.setState({
        mode: {
          mode: "dark",
          style: {
            background: "black",
            color: "white"
          }
        },
        btnText: "Disable Dark Mode"
      })
      document.body.style.background = "black"
    } else {
      this.setState({
        mode: {
          mode: "light",
          style: null
        },
        btnText: "Enable Dark Mode"
      })
      document.body.style.background = "white"
    }
  }

  setProgress = (prog) => {
    this.setState({
      progress: prog
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar handleMode={this.handleMode} mode={this.state.mode} btnText={this.state.btnText} />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.state.pageSize} category="general" mode={this.state.mode} />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.state.pageSize} category="general" mode={this.state.mode} />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.state.pageSize} category="business" mode={this.state.mode} />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.state.pageSize} category="entertainment" mode={this.state.mode} />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.state.pageSize} category="health" mode={this.state.mode} />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.state.pageSize} category="science" mode={this.state.mode} />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.state.pageSize} category="sports" mode={this.state.mode} />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.state.pageSize} category="technology" mode={this.state.mode} />} />
            <Route path="/about" element={<About setProgress={this.setProgress} mode={this.state.mode} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;