function Parameters(props) {
    function buildParameter(parameter) {
        return (
            <div key={parameter.ParameterName}>
                <label>{parameter.ParameterName}</label>
                <span>{parameter.ParameterDescription}</span>
                <label>Required: {parameter.ParameterIsRequiredFlag == 1 ? 'True' : 'False'}</label>
            </div>
        )
    }
    function buildParameters(parameters) {
        return parameters.map(parameter => {
            return buildParameter(parameter);
        })
    }
    return (
        <div>
            {buildParameters(props.parameters)}
        </div>
    );
}

export default Parameters;