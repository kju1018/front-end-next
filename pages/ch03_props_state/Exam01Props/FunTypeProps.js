import PropTypes from "prop-types";

function FunTypeProps(props) {
  const {name, version, children} = props;
  return(
    <div class="card">
        <div class="card-header">
          FunTypeProps
        </div>
        <div class="card-body">
          <div>name: {name}</div>
          <div>version: {version}</div>
          {children}
        </div>
    </div>
  );
}

FunTypeProps.defaultProps = {
  name:"React",
  version: 17
};

FunTypeProps.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.number
}

export default FunTypeProps;