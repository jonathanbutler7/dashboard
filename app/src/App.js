import Message from './Message';
import EditModal from './Modal';
import Snackbar from './Snackbar';
import Header from './Header';
import { DashboardProvider } from './context';

function App() {
  return (
    <DashboardProvider>
      <EditModal />
      <Snackbar />
      <Header />
      <Message />
    </DashboardProvider>
  );
}

export default App;
