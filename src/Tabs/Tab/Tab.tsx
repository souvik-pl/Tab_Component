import { TabProps } from "../common/common.types";
import useTabContext from "../common/useTabContext";
import styles from "./Tab.module.css";

function Tab(props: TabProps) {
  const { label, value, icon } = props;
  const { activeTab, setActiveTab, focusedTab, setFocusedTab, selectionHandler } = useTabContext();

  function tabClickHandler() {
    setActiveTab(value);
    setFocusedTab(value);
    selectionHandler(value);
  }

  return (
    <button
      className={styles.container}
      style={{
        border: focusedTab === value ? "2px solid blue" : undefined,
        backgroundColor: activeTab === value ? "lightblue" : undefined,
      }}
      onClick={tabClickHandler}
      tabIndex={activeTab === value ? 0 : -1}
      role="tab"
      type="button"
    >
      {icon} {label}
    </button>
  );
}

export default Tab;
