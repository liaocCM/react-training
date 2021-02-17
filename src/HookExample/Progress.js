import React, { useState, useEffect } from 'react';
import { Progress, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const ProgressDemo = ({ variable }) => {
  console.log('ProgressDemo variable', variable);

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // console.log('do effect');
    const interval = setInterval(() => {
      setPercent((percent) => {
        if (percent > 100) {
          percent = 0;
        }
        return percent + 1;
      });
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function increase(number = 10) {
    let percentNow = percent + number;
    if (percentNow > 100) {
      percentNow = 0;
    }
    setPercent(percentNow);
  }

  const decline = (number = 10) => {
    let percentNow = percent - number;
    if (percentNow < 0) {
      percentNow = 0;
    }
    setPercent(percentNow);
  };

  return (
    <div style={{ padding: '5px' }}>
      <Progress type="circle" percent={percent} />
      <Button.Group style={{ marginTop: '10px', display: 'block' }}>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </div>
  );
};

export default ProgressDemo;
