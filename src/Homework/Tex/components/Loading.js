import { Spin } from 'antd';

export const Spinner = ({ tip }) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin style={{ marginRight: 10 }} tip={tip} />
      LOADING...
    </div>
  );
};
