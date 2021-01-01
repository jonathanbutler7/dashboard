import Snackbar from './components/Snackbar';
import Header from './components/Header';
import Menu from './components/Menu';
import Messages from './components/Messages';
import { DashboardProvider } from './context';

function App() {
  return (
    <DashboardProvider>
      <Snackbar />
      <Header />
      <Messages />
    </DashboardProvider>
  );
}

export default App;
