import { Spin } from "antd";

export const spinner = ({ tip }) => {
  return <Spin tip={tip} />;
};

export const skeleton = () => {
  return <div></div>;
};
