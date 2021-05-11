import React from "react";
import { Spin } from "antd";

export const withLoading = (Component) => (props) => {
  const { isLoading } = props;

  return (
    <Spin tip="Loading..." spinning={isLoading}>
      <Component {...props} />
    </Spin>
  );
};
