import React from "react";
import { BREADCRUMB_DATA } from "../../utils/data";
import BreadCrumb from "../../components/partial/BreadCrumb";
import Input from "../../components/FormFileds/Input";
import { Candidate } from "../../interfaces";
import CheckBox from "../../components/FormFileds/CheckBox";
import Button from "../../components/partial/Button";
import { CommonApi } from "../../services/CommonAPI";
import { validateEmail } from "../../utils/validator";

type Props = {};

const AddCandidate = (props: Props) => {
  const initialData = {
    name: "",
    email: "",
    phone: "",
    skills: [
      {
        label: "React",
        value: 0,
      },
      {
        label: "Node.js",
        value: 0,
      },
    ],
    qualification: "",
    experience: "",
    expected_ctc: "",
    current_ctc: "",
  };

  const [data, setData] = React.useState<Candidate>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.qualification ||
      !data.experience ||
      !data.current_ctc ||
      !data.expected_ctc
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (data.phone.length !== 10) {
      alert("Please enter valid phone number");
      return;
    }
    if (!validateEmail(data.email)) {
      alert("Please enter valid email");
      return;
    }
    if (data.skills[0].value === 0 || data.skills[1].value === 0) {
      alert("Please select skills");
      return;
    }
    const obj = {
      ...data,
      skills: JSON.stringify(data.skills),
    };
    try {
      const res = await CommonApi.AddCandidate(obj);
      if (res) {
        alert("Candidate added successfully");
        setData(initialData);
      }
    } catch (err: any) {
      alert(err.response.data.message || "Something went wrong");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-2xl">Add Candidate</h4>
          <BreadCrumb items={BREADCRUMB_DATA.ADD_CADIDATE} />
        </div>
        <Button
          onClick={handleSubmit}
          state="primary"
          type="filled"
          className="px-5"
        >
          Save
        </Button>
      </div>
      <div className="mt-5">
        <div className="bg-white p-4 rounded-lg">
          <h4 className="text-lg">Basic Information</h4>
          <div className="mt-3.5">
            <label htmlFor="" className="text-black_300">
              Candidate Name
            </label>
            <Input
              className="mt-1 text-black_300"
              placeholder="Eg:. Anand D"
              value={data?.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3.5">
            <label htmlFor="" className="text-black_300">
              Phone Number
            </label>
            <Input
              className="mt-1 text-black_300"
              placeholder="Eg:. 8908908908"
              value={data?.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3.5">
            <label htmlFor="" className="text-black_300">
              Email
            </label>
            <Input
              className="mt-1 text-black_300"
              placeholder="Eg:. anand@gmail.com"
              value={data?.email}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg mt-8">
          <h4 className="text-lg">Work</h4>
          <div className="mt-3.5">
            <label htmlFor="" className="text-black_300">
              Skills
            </label>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <h4>React</h4>
                <div className="flex gap-2 items-center">
                  <CheckBox
                    checked={data?.skills[0]?.value === "1" ? true : false}
                    onChange={(e: any) => {
                      if (e.target.checked) {
                        setData({
                          ...data,
                          skills: [
                            {
                              label: "React",
                              value: "1",
                            },
                            data.skills[1],
                          ],
                        });
                      }
                    }}
                  />
                  1 Year
                </div>
                <div className="flex gap-2 items-center">
                  <CheckBox
                    checked={data?.skills[0]?.value === "2" ? true : false}
                    onChange={(e: any) => {
                      if (e.target.checked) {
                        setData({
                          ...data,
                          skills: [
                            {
                              label: "React",
                              value: "2",
                            },
                            data.skills[1],
                          ],
                        });
                      }
                    }}
                  />
                  1 - 2 Year
                </div>
                <div className="flex gap-2 items-center">
                  <CheckBox
                    checked={data?.skills[0]?.value === "3" ? true : false}
                    onChange={(e: any) => {
                      if (e.target.checked) {
                        setData({
                          ...data,
                          skills: [
                            {
                              label: "React",
                              value: "3",
                            },
                            data.skills[1],
                          ],
                        });
                      }
                    }}
                  />
                  More then 2 years
                </div>
              </div>
              <div className="col-span-1">
                <h4>Node.js</h4>
                <div className="flex gap-2 items-center">
                  <CheckBox
                    checked={data?.skills[1]?.value === "1" ? true : false}
                    onChange={(e: any) => {
                      if (e.target.checked) {
                        setData({
                          ...data,
                          skills: [
                            data.skills[0],
                            {
                              label: "Node.js",
                              value: "1",
                            },
                          ],
                        });
                      }
                    }}
                  />
                  1 Year
                </div>
                <div className="flex gap-2 items-center">
                  <CheckBox
                    checked={data?.skills[1]?.value === "2" ? true : false}
                    onChange={(e: any) => {
                      if (e.target.checked) {
                        setData({
                          ...data,
                          skills: [
                            data.skills[0],
                            {
                              label: "Node.js",
                              value: "2",
                            },
                          ],
                        });
                      }
                    }}
                  />
                  1 - 2 Year
                </div>
                <div className="flex gap-2 items-center">
                  <CheckBox
                    checked={data?.skills[1]?.value === "3" ? true : false}
                    onChange={(e: any) => {
                      if (e.target.checked) {
                        setData({
                          ...data,
                          skills: [
                            data.skills[0],
                            {
                              label: "Node.js",
                              value: "3",
                            },
                          ],
                        });
                      }
                    }}
                  />
                  More then 2 years
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3.5">
            <label htmlFor="" className="text-black_300">
              Qualification
            </label>
            <Input
              className="mt-1 text-black_300"
              placeholder="Eg:. Bachelor of Engineering"
              value={data?.qualification}
              name="qualification"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3.5">
            <label htmlFor="" className="text-black_300">
              Experience
            </label>
            <Input
              className="mt-1 text-black_300"
              placeholder="Eg:. Expirence in years"
              type="number"
              value={data?.experience}
              name="experience"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3.5">
            <label htmlFor="" className="text-black_300">
              Current CTC
            </label>
            <Input
              className="mt-1 text-black_300"
              placeholder="Eg:. 3,00,000"
              type="number"
              value={data?.current_ctc}
              name="current_ctc"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3.5">
            <label htmlFor="" className="text-black_300">
              Expected CTC
            </label>
            <Input
              className="mt-1 text-black_300"
              placeholder="Eg:. 5,00,000"
              type="number"
              value={data?.expected_ctc}
              name="expected_ctc"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCandidate;
