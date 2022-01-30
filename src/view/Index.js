import '../assets/css/Index.css';
import IndexNavBar from '../components/navbar/IndexNavBar';
import Content from '../components/page/Content';
import Chat from '../components/cards/Chat';


function Index() {
  return (
    <div className="App">
      <IndexNavBar />
      <Content />
      <Chat />
    </div>
  );
}

export default Index;
