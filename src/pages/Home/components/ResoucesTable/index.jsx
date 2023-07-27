import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const ResourcesTable = ({ resources }) => {
  return (
    <>
      {resources.map((resource) => (
        <p key={uuidv4()}>{resource.name}</p>
      ))}
    </>
  );
};

ResourcesTable.propTypes = {
  resources: PropTypes.array.isRequired,
};

export default ResourcesTable;
