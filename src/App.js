import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<SettingsIcon />} variant="contained" color="success">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
