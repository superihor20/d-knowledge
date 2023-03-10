import { BookOutlined } from '@ant-design/icons';
import {
  ConfigProvider,
  MenuProps,
  Breadcrumb,
  Layout,
  Menu,
  theme,
} from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { ComponentWithChildren } from '../../types/component-with-children';
import { adminPages } from '../../utils/contants/links';
import { getBreadcrumbValues } from '../../utils/helpers/get-breadcrumb-values';

const { Content, Footer, Sider } = Layout;

const menuItems: MenuProps['items'] = [
  {
    key: adminPages.questionsCategories,
    label: (
      <Link href={adminPages.questionsCategories}>Questions Categories</Link>
    ),
    icon: <BookOutlined />,
  },
];

export const MainLayoutAdmin: ComponentWithChildren = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  const breadcrumbItems = getBreadcrumbValues(router.pathname).filter(Boolean);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#34d399',
          colorLink: '#059669',
          colorLinkHover: '#047857',
        },
      }}
    >
      <Layout>
        <Content
          style={{
            padding: '0 50px',
            maxWidth: '1280px',
            alignSelf: 'center',
            width: '100%',
          }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbItems.map((breadcrumbItem) => (
              <Breadcrumb.Item key={breadcrumbItem}>
                {breadcrumbItem}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
            <Sider style={{ background: colorBgContainer }} width={220}>
              <Menu
                mode='inline'
                defaultSelectedKeys={[adminPages.questionsCategories]}
                style={{ height: '100%' }}
                items={menuItems}
              />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ihor Naidonov ??2023 Created by Ihor Naidonov
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
