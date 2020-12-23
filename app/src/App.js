import EditModal from './components/Modal';
import Snackbar from './components/Snackbar';
import Header from './components/Header';
import Messages from './components/Messages';
import { DashboardProvider } from './context';

function App() {
  return (
    <DashboardProvider>
      <EditModal />
      <Snackbar />
      <Header />
      <Messages />
    </DashboardProvider>
  );
}

export default App;
