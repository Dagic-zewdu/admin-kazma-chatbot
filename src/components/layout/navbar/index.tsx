import { Button, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { navabarProps } from "./model";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

function NavBar({ collapsed, setCollapsed }: navabarProps) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: "#FFFF",
        position: "fixed",
        width: collapsed ? "95%" : "90%",
        paddingLeft: "20px",
      }}
    >
      <div className="flex  align-center justify-between w-full">
        <div className="flex">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <h1 className="mr-3">
            <b>KAZMA CHAT ADMIN BOARD
            </b>
          </h1>
        </div>
      </div>
    </Header>
  );
}

export default NavBar;
