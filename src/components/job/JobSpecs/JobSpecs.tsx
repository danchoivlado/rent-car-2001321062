import styles from "./jobSpecs.module.scss";
import { JobSpec, ListType } from "../../../interfaces";

interface Props {
  specs: JobSpec;
  listType: ListType;
  specsTypeText: string;
}

const JobSpecs = ({
  specs: { content, items },
  listType,
  specsTypeText,
}: Props) => {
  const listItems = items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div className={styles.requirements}>
      <h3>{specsTypeText}</h3>
      <p>{content}</p>
      {listType === ListType.UL ? <ul>{listItems}</ul> : <ol>{listItems}</ol>}
    </div>
  );
};

export default JobSpecs;
