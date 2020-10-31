import './App.css';
import { useState, useEffect } from 'react';
import beaService from './beaService';
import DatasetSelect from './DatasetSelect';
import Parameters from './Parameters';

function App() {
  const [apiKey, setApiKey] = useState();
  const [error, setError] = useState();
  const [datasetList, setDatasetList] = useState([]);
  const [dataset, setDataset] = useState();
  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    if (apiKey) {
      beaService.getDatasetList(apiKey)
        .then(response => {
          setDatasetList(response)
          setError(undefined)
          setDataset(undefined)
        })
        .catch(e => setError(e.message))
    } else {
      setError(undefined)
      setDatasetList([])
      setDataset(undefined)
    }
  }, [apiKey])

  useEffect(async () => {
    if (dataset) {
      beaService.getParameters(apiKey, dataset)
        .then(response => {
          setParameters(response)
          setError(undefined)
        })
        .catch(e => setError(e.message))
    } else {
      setParameters([])
    }
  }, [apiKey, dataset])

  return (
    <div className="App">
      <div>{error}</div>
      <label>API key: </label><input value={apiKey} onChange={e => setApiKey(e.target.value)}></input>
      {datasetList.length > 0 &&
        <DatasetSelect datasetList={datasetList} dataset={dataset} setDataset={setDataset} />
      }
      
    </div>
  );
}

export default App;
