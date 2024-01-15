import React from "react";
import skillsData from "../skills";

function Skills() {
  const modifyCategoryName = (categoryName) => {
    switch (categoryName) {
      case "OperatingSystems":
        return "Operating Systems";
      case "PythonLibraries":
        return "Python Libraries";
      case "WebDevelopment":
        return "Web Development";
      case "DevOps":
        return "DevOps Tools";
      case "CodeEditors":
        return "Code Editors";
      default:
        return categoryName;
    }
  };

  const categories = Object.entries(skillsData);
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const categoryStyle = {
    margin: "20px",
    textAlign: "center",
  };

  const itemStyle = {
    margin: "10px",
    textAlign: "center",
    flex: "1 1 150px",
    minWidth: "30px",
    maxWidth: "61px",
  };

  return (
    <div>
      {categories.map(([categoryName, categoryItems], index) => (
        <div key={index}>
          <div style={categoryStyle}>
            <h3>{modifyCategoryName(categoryName)}</h3>
          </div>
          <div style={containerStyle}>
            {categoryItems.map((item) => (
              <div key={item.id} style={itemStyle}>
                <img
                  src={item.link}
                  alt={item.name}
                  style={{ width: "100%", height: "auto" }}
                  title={item.name}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
