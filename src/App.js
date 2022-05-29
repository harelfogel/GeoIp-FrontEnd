import MapWrapper from "./Components/MapWrapper";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from "./Components/Header";
import '@fontsource/roboto/300.css';
import { createTheme ,  MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { BottomNavigation } from '@mui/material';


const App = () => {
  const theme = createTheme ({
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 27,
    },
  });
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          marginTop: "-100px",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          justifyContent: "center"
        }}
      >
        <ThemeProvider theme={theme}>
        <Box>
          <Typography variant="h4" display="block" >
            Discover your public IP
          </Typography>
        </Box>
         </ThemeProvider>
        <MapWrapper />
      </div>
    </div>
  );
};

export default App;
