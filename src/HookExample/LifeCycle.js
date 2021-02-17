import { useState } from 'react';
import { Button } from 'antd';

import Progress from './Progress';
import styles from './index.module.css';

const LifeCycle = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={styles.lifeCycleWrapper}>
      <Button
        className={styles.toggleBtn}
        type="primary"
        onClick={() => setOpen(!open)}
      >
        Toggle Element
      </Button>
      {open && <Progress variable={1} />}
    </div>
  );
};

export default LifeCycle;
