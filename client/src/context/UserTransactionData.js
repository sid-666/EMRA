import React, { createContext, useState} from "react";
const DataContext = createContext();

function DataContextProvider(props) {
  const [dataUpdated, setDataUpdated] = useState(false);
  const changeFalseStatus = () => {
    setDataUpdated(true)
  }
  const changeTrueStatus = () => {
    setDataUpdated(false)
  }
  // useEffect(() => {
  //   getChartData();
  // }, [])
  return (
    <DataContext.Provider value={{ dataUpdated, changeFalseStatus, changeTrueStatus }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
export { DataContextProvider };