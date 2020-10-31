function Parameters(props) {
    function buildParameter(parameter) {
        return (
            <div key={parameter.ParameterName}>
                <label>{parameter.ParameterName}</label>
                <p>{parameter.ParameterDescription}</p>
                <label>Required: {!parameter.ParameterIsRequiredFlag}</label>
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