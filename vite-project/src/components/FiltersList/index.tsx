import classNames from "classnames";
import { TFilterType } from "../../types/types.ts";
import styles from "./index.module.scss";

const filterTypes = ["All", "Active", "Completed"];

type TFiltersListProps = {
  filterType: TFilterType;
  setFilterType: (filterType: TFilterType) => void;
};

function FiltersList({ filterType, setFilterType }: TFiltersListProps) {
  const handleFilterTasks = (filterType: TFilterType) => {
    setFilterType(filterType);
  };

  return (
    <div className={styles.filterTaskTabs}>
      {filterTypes.map((type) => (
        <span
          key={type}
          className={classNames({
            [styles.activeTab]: filterType === type,
          })}
          onClick={() => handleFilterTasks(type as TFilterType)}
        >
          {type}
        </span>
      ))}
    </div>
  );
}

export default FiltersList;
