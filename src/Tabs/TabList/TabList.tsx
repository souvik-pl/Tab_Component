import { useState } from "react";
import { TabListProps } from "../common/common.types";
import styles from "./TabList.module.css";
import { TabsContext } from "../common/TabsContext";

function TabList(props: TabListProps) {
  const { onChange: selectionHandler, children, height, width } = props;
  const [activeTab, setActiveTab] = useState(0);
  const [focusedTab, setFocusedTab] = useState(0);

  function keydownHandler(event: React.KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case "ArrowRight":
        setFocusedTab(focusedTab + 1 > children.length - 1 ? children.length - 1 : focusedTab + 1);
        break;
      case "ArrowLeft":
        setFocusedTab(focusedTab - 1 < 0 ? 0 : focusedTab - 1);
        break;
      case "Home":
        setFocusedTab(0);
        break;
      case "End":
        setFocusedTab(children.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        setActiveTab(focusedTab);
        selectionHandler(focusedTab);
        break;
      default:
        break;
    }
  }

  return (
    <TabsContext.Provider
      value={{ activeTab, setActiveTab, focusedTab, setFocusedTab, selectionHandler }}
    >
      <div
        className={styles.container}
        style={{ width: width, height: height }}
        onKeyDown={keydownHandler}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export default TabList;
