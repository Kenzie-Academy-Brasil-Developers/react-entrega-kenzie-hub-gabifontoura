import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(null);

  const token = localStorage.getItem("@TOKEN");

  const { user } = useContext(UserContext);

    
    // const techListAPI = user.techs.map((tech) => console.log(tech))
    
  const [techList, setTechList] = useState();
    

  async function addTech(formData, setLoading) {
    try {
      if (user) {
        setLoading(true);
        const response = await api.post("/users/techs", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success(response.statusText);

        const techListAPI = user.techs;

        setTechList([...techListAPI, formData]);

      }
      setIsModalVisible(false);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  async function removeTech(id, setLoading) {
    try {
      const response = await api.delete("/users/techs/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (user) {
        setLoading(true);

        const newList = techList.filter((tech) => tech.id !== id);

        setTechList(newList);
  
        toast.success(response.statusText);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <TechContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        addTech,
        removeTech,
        techList,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
