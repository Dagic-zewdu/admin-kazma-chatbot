import { useState } from "react";
import { Layout, theme } from "antd";

import NavBar from "../navbar";
import SideNavigation from "../side-navigation";
import { CommonProps } from "@/model/common";

const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }: CommonProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgBase, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "98vh", padding: 0 }}>
      <SideNavigation collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout style={{ marginLeft: collapsed ? "80px" : "200px" }}>
        <NavBar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
        className="h-full"
          style={{
            margin: "71px 16px",
            padding: 24,
            height: '100%',
            background: colorBgBase,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
