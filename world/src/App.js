import './App.css';
import {useWorldAtlas} from './useWorldAtlas';
import {useAurora} from './useAurora';
import {World} from './World';

const width =  window.innerWidth;
const height = window.innerHeight;

const App = () => {
  const worldData = useWorldAtlas();
  const auroraData = useAurora();


  if(!worldData || !auroraData) {
    return <pre>Loading...</pre>
  }



  return (
    <svg width={width} height={height}>
      <World worldAtlas={worldData} aurora={auroraData}/>
    </svg>
  );
}

export default App;
