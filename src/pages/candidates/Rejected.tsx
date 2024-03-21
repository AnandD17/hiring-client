import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/partial/BreadCrumb";
import { ROUTES } from "../../router/RouteConfig";
import { BREADCRUMB_DATA } from "../../utils/data";
import Table from "../../components/Table/Table";
import Button from "../../components/partial/Button";
import { CommonApi } from "../../services/CommonAPI";
import { Candidate } from "../../interfaces";
import {
  getExperienceString,
  getSkillScore,
} from "../../utils/reUsableFunctions";
import { FaCheck, FaRegHandshake, FaRegTrashAlt } from "react-icons/fa";
import { Tooltip } from "antd";

type Props = {};

const Rejected = (props: Props) => {
  const [data, setData] = useState<Candidate[]>([]);

  const getData = async () => {
    try {
      const res = await CommonApi.GetCandidate({
        status: "rejected",
      });
      if (res.success) {
        console.log(res.data);
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id: string, status: string) => {
    try {
      const res = await CommonApi.UpdateCandidate(id, {
        status: status,
      });
      if (res.success) {
        console.log(res.data);
        getData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Skills",
      dataIndex: "skills",
      key: "skills",
      render: (skills: any) => {
        return (
          <div>
            {JSON.parse(skills)?.map((skill: any, index: number) => (
              <div key={index} className="mr-2">
                {skill?.label}: {getExperienceString(skill?.value)}
              </div>
            ))}
          </div>
        );
      },
    },
    {
      title: "Score",
      dataIndex: "skills",
      key: "skills",
      render: (skills: any) => {
        return <div>{getSkillScore(skills)}</div>;
      },
    },
    {
      title: "Qualification",
      dataIndex: "qualification",
      key: "qualification",
    },
    {
      title: "Expected Salary",
      dataIndex: "expected_ctc",
      key: "expected_ctc",
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h4 className="text-2xl">REJECTED</h4>
      <BreadCrumb items={BREADCRUMB_DATA.CONDIDATES_REJECTED} />
      <div className="mt-6">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Rejected;
