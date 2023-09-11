"use client";

import React from "react";

import { Refine } from "@refinedev/core";
import {
  notificationProvider,
  RefineThemes,
  ThemedLayoutV2,
  ThemedSiderV2,
} from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/nextjs-router/app";
import "@refinedev/antd/dist/reset.css";

import { ConfigProvider } from "antd";
import "@styles/global.scss";

import { authProvider } from "src/authProvider";
import { API_URL } from "../src/constants";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider theme={RefineThemes.Blue}>
      <html lang="en">
        <body>
          <Refine
            authProvider={authProvider}
            routerProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
            resources={[
              {
                name: "posts",
                list: "/posts",
                create: "/posts/create",
                edit: "/posts/edit/:id",
                show: "/posts/show/:id",
                meta: {
                  canDelete: true,
                },
              },
            ]}
            options={{
              syncWithLocation: true,
            }}
            notificationProvider={notificationProvider}
          >
            <ThemedLayoutV2 Sider={() => <ThemedSiderV2 />}>
              {children}
            </ThemedLayoutV2>
          </Refine>
        </body>
      </html>
    </ConfigProvider>
  );
}
