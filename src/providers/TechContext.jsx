import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(null);

  const token = localStorage.getItem("@TOKEN");

  const { user } = useContext(UserContext);
 
  const techListAPI = user && user.techs;

  const [techList, setTechList] = useState();

  
  useEffect(() => {
    setTechList(techListAPI)
  }, [techListAPI])
  
  


  
  async function addTech(formData, setLoading) {
    try {
     
        setLoading(true);
        const response = await api.post("/users/techs", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response)

        toast.success(response.statusText);
        
        setIsModalVisible(false);
        setTechList(techList => [...techList, response.data])
        


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
      
        setLoading(true);
        toast.success(response.statusText);

        const filteredTechList = techList.filter(tech => tech.id !== id )
        setTechList(filteredTechList)
      
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
