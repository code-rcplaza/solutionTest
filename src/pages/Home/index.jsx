import { useEffect, useState } from "react";
import ResourceForm from "./components/ResourceForm";
import ResourcesTable from "./components/ResoucesTable";

import { getResources, postResources } from "../../services";

import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [resourceName, setResourceName] = useState("");
  const [resources, setResources] = useState([]);

  const fetchResources = async () => {
    try {
      const response = await getResources();

      console.log(resources);
      setResources(response);
    } catch (error) {
      console.error("Error al obtener los recursos:", error);
    }
  };

  const fetchPostResources = async (payload) => {
    try {
      const response = await postResources(payload);

      console.log(resources);
      setResources(response);
    } catch (error) {
      console.error("Error al obtener los recursos:", error);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleChange = ({ target }) => {
    const { value } = target;
    setResourceName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (resourceName !== "") {
      fetchPostResources({
        id: uuidv4(),
        name: resourceName,
      });
    }
    setResourceName("");
  };

  return (
    <>
      <ResourceForm
        resource={resourceName}
        onClick={handleSubmit}
        onChange={handleChange}
      />
      <ResourcesTable resources={resources} />
    </>
  );
};

export default Home;
