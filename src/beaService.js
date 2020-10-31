const beaBaseUrl = 'https://apps.bea.gov/api/data/';

const beaService = {
    getDatasetList(apiKey) {
        return fetch(`${beaBaseUrl}?UserID=${apiKey}&method=getdatasetlist`)
            .then(response => response.json())
            .then(responseJson => responseJson.BEAAPI.Results)
            .then(results => {
                if (results.Error) {
                    throw new Error(JSON.stringify(results.Error))
                }
                return results.Dataset
            })
    },

    getParameters(apiKey, dataset) {
        return fetch(`${beaBaseUrl}?UserID=${apiKey}&method=getparameterlist&datasetname=${dataset}`)
        .then(response => response.json())
        .then(responseJson => responseJson.BEAAPI.Results)
        .then(results => {
            if (results.Error) {
                throw new Error(JSON.stringify(results.Error))
            }
            return results.Parameter
        })
    }
}


export default beaService;