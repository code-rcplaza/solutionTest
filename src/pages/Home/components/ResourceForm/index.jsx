import PropTypes from "prop-types";

const ResourceForm = ({ resource, onClick, onChange }) => {
  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={resource}
          onChange={onChange}
          placeholder="Insert name here!!"
        />

        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </>
  );
};

ResourceForm.propTypes = {
  resource: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ResourceForm;
