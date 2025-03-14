import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StudentPortfolio from "./pages/student_form";
import AuthPage from "./pages/AuthPage";
import "./App.css";

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/updateform" element={<StudentPortfolio />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
