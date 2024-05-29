import Sider from "antd/es/layout/Sider";
import { SideNavigationProps } from "./model";
import { Menu } from "antd";
import {
  MessageOutlined,
  ImportOutlined,
  FileOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { MenuInfo } from "rc-menu/lib/interface";
import { theme } from "antd";

function SideNavigation({ collapsed, setCollapsed }: SideNavigationProps) {
  const router = useRouter();
  const handleClick = (menuInfo: MenuInfo) => {
    const { key } = menuInfo;
    switch (key) {
      case "docs":
        router.push("/");
        break;
      case "add-document":
        router.push("/add-document");
        break;
      case "chats":
        router.push("/chats");
        case "import-document":
          router.push("/import-document");
        break;
      default:
        return;
    }
  };
  const {
    token: { colorFillSecondary, borderRadiusLG },
  } = theme.useToken();
  return (
    <Sider
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        position: "fixed",
        height: "100%",
        background: colorFillSecondary,
      }}
    >
      <Image
        className="object-cover mt-3"
        src="/assets/images/logo.png"
        alt=""
        width={collapsed ? 90 : 200}
        height="150"
      />

      <Menu
        onClick={(e) => handleClick(e)}
        className="h-full"
        defaultSelectedKeys={[router.pathname?.split("/")[1] || "docs"]}
        style={{ marginTop: "60px !important" }}
        items={[
          {
            key: "docs",
            icon: <FileOutlined />,
            label: "All documents",
          },
          {
            key: "add-document",
            icon: <FileAddOutlined />,
            label: "Add Documents",
          },
          {
            key: "chats",
            icon: <MessageOutlined />,
            label: "chats",
          },
          {
            key: "import-document",
            icon: <ImportOutlined />,
            label: "Import  Document",
          }
        ]}
      />
    </Sider>
  );
}

export default SideNavigation;
