"use client";

import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router/app";
import { Col, Row, Tag, TimePicker, Typography } from "antd";
import { useState } from "react";
import type { Dayjs } from "dayjs";
import type { RangeValue } from "rc-picker/lib/interface";

export default function IndexPage() {
  const [value, setValue] = useState(0);

  const elems = [];
  for (let index = 0; index < 31; index++) {
    elems.push(
      <>
        <Typography.Text>Day {index + 1} </Typography.Text>
        <TimePicker.RangePicker
          format="HH:mm"
          size="large"
          onChange={(v: RangeValue<Dayjs>, x) => {
            const diff = v?.[1]?.diff(v[0], "hour", true);
            if (diff) setValue(value + diff);
          }}
        />
      </>
    );
  }

  return (
    <>
      <Typography.Title level={1}>
        Calculate Working Hours - احسب عدد ساعات العمل
      </Typography.Title>
      <Row>
        <Col span={8}>
          <Row gutter={[24, 24]}>
            {elems.map((elem, i) => (
              <Col span={24} key={i}>
                {elem}
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={12}>
          <Tag>
            <Typography.Title copyable level={3} style={{ marginBottom: 0 }}>
              {value}
            </Typography.Title>
          </Tag>
        </Col>
      </Row>
    </>
  );
}
