import '../assets/css/Index.css';
import IndexNavBar from '../components/navbar/IndexNavBar';
import Content from '../components/page/Content';


function Index() {
  return (
    <div className="App">
      <IndexNavBar />
      <Content />
    </div>
  );
}

export default Index;
