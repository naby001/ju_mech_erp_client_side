import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import StudentPortfolio from "./pages/student_form";
import AuthPage from "./pages/AuthPage";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogout } from "./state";
// ✅ Create a Custom Theme
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          height: "48px", // Set a fixed height
          "& .MuiOutlinedInput-root": {
            height: "48px",
            borderRadius: "8px", // Slightly rounded corners
          },
          "& .MuiInputBase-input": {
            height: "48px",
            //padding: "12px", // Ensure proper padding inside
          },
        },
      },
    },
  },
});

function App() {
  const user=useSelector((state)=>state.user);
  const dispatch=useDispatch();
  //dispatch(setLogout());
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>

          <Route path="/" element={!user?<AuthPage />:<StudentPortfolio/>} />
          <Route path="/updateform" element={user?<StudentPortfolio />:<AuthPage/>} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
