import 'bootstrap/dist/css/bootstrap.css'
import Hd from './layout/Hd'
import Ft from './layout/Ft'
import Content from './layout/Content'
import db from './db/data.json'



function App() {
  return (
    <>
    <Hd dbpath={db.nav} ></Hd>
    <Content dbpath={db.eventdb}></Content>
    <Ft dbpath={db.info}></Ft>
    </>
  );
}

export default App;
