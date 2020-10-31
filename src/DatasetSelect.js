function DatasetSelect(props) {
    function getDatasetListOptions(datasetList) {
        return datasetList.map(ds => {
            return (<option key={ds.DatasetName} value={ds.DatasetName}>{ds.DatasetName} ({ds.DatasetDescription})</option>)
        })
    }

    return (
        <div>
            <label>Data set: </label>
            <select value={props.dataset} onChange={e => props.setDataset(e.target.value)}>
                <option value={undefined}></option>
                {getDatasetListOptions(props.datasetList)}
            </select>
        </div>
    );
}

export default DatasetSelect;