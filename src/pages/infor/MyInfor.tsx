import React, { CSSProperties, useState } from "react";
import "./MyInfor.scss";
import { Accordion } from "flowbite-react";
import { Collapse } from "antd";
import { CollapseProps } from "react-bootstrap";
import { CaretRightOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { resetPassword, updateInfor } from "../../redux/reducer/auth";

const SecurityInfor: React.FC = () => {
  return (
    <form>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_email"
          className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Old password
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_email"
          className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          New password
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_email"
          className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Re-typed new password
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 "
      >
        Update password
      </button>
    </form>
  );
};

const Infor: React.FC = () => {
  const [name, setName] = useState<string>(
    JSON.parse(localStorage.getItem("name")) || ""
  );
  const [email, setEmail] = useState<string>(
    JSON.parse(localStorage.getItem("email")) || ""
  );

  const dispatch = useDispatch();

  const inforUser = () => {
    dispatch(updateInfor({ name: name, email: email }));
  };

  return (
    <form>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          value={name}
          required
        />
        <label
          for="floating_email"
          className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Username
        </label>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          value={email}
          required
        />
        <label
          for="floating_email"
          className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>
      <button
        type="submit"
        onClick={inforUser}
        className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 "
      >
        Update Information
      </button>
    </form>
  );
};

const MyInfor: React.FC = () => {
  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: <p className="font-bold">Information</p>,
      children: <Infor />,
      style: panelStyle,
    },
    {
      key: "2",
      label: <p className="font-bold">Security & password</p>,
      children: <SecurityInfor />,
      style: panelStyle,
    },
  ];

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,

    border: "none",
  };

  return (
    <section className="mt-24 fade-in  min-h-screen">
      <div className="infor-tag flex flex-col items-center ">
        <div className="infor-tag-frame  ">
          <h2 className="tag-frame-name text-3xl uppercase font-semibold">
            Account
          </h2>
          <div className="tag-frame-board mt-10 mb-10 p-20">
            <div className="frame-board-intro flex flex-row ">
              <div className="flex flex-col items-center m-10">
                <img
                  className="w-56 h-56 mb-3 rounded-full shadow-lg"
                  src=""
                  alt=""
                />
                <div className="frame-name-button">
                  <button className="name-button-browse ">Change avatar</button>
                </div>
              </div>
              <div className="opacity-1" style={{ width: "70vh" }}>
                <Collapse
                  size="large"
                  bordered={false}
                  defaultActiveKey={["1"]}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  style={{ background: "white" }}
                  items={getItems(panelStyle)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyInfor;
