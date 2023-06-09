import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Login />}></Route>
					<Route
						path="/home"
						element={
							<>
								<Header /> <Home />
							</>
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
