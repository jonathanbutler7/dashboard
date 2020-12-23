import EditModal from './Modal';
import Snackbar from './Snackbar';
import Header from './Header';
import Messages from './Messages'
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
