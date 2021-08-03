import React, { useState, useEffect } from "react";

import TableComponent from "./Components/Table";

import { useForm } from "react-hook-form";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const updateWindowDimensions = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Column",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column ",
        accessor: "col2",
      },
      {
        Header: "Column ",
        accessor: "col3", // accessor is the "key" in the data
      },
      {
        Header: "Column ",
        accessor: "col4",
      },
      {
        Header: "Column ",
        accessor: "col5", // accessor is the "key" in the data
      },
      {
        Header: "Column ",
        accessor: "col6",
      },
    ],
    []
  );

  return (
    <div
      style={{
        width: dimensions.width,
        height: dimensions.height,
        display: "flex",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#0e101c",
      }}
    >
      <div
        style={{
          display: "flex",

          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: 41,
            margin: 21,
          }}
        >
          Employee Data
        </h1>
        <button
          style={{
            // color: "white",
            fontSize: 11,
            height: 30,
            alignSelf: "center",
            margin: 21,
          }}
          onClick={openModal}
        >
          Add Employee
        </button>
      </div>

      <TableComponent data={data} columns={columns} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            width: dimensions.width / 4,
            height: dimensions.height / 3,
            display: "flex",
            flex: 1,
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2>New Employee</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                style={{
                  paddingRight: 12,
                }}
              >
                Name
              </label>
              <input placeholder="bill" {...register("firstName")} />
            </div>

            <div
              style={{
                paddingTop: 12,
              }}
            >
              <label
                style={{
                  paddingRight: 12,
                }}
              >
                Gender
              </label>
              <select {...register("Gender")}>
                <option value="null">Select Gender</option>
                <option value="Mr">Male</option>
                <option value="Mr">Female</option>
              </select>
            </div>

            <div
              style={{
                paddingTop: 12,
              }}
            >
              <label
                style={{
                  paddingRight: 12,
                }}
              >
                {" "}
                Phone
              </label>
              <input placeholder="bill" {...register("phoneNumber")} />
            </div>

            <div
              style={{
                paddingTop: 12,
              }}
            >
              <label
                style={{
                  paddingRight: 12,
                }}
              >
                Email
              </label>
              <input
                placeholder="Enter Email"
                type="email"
                {...register("email")}
              />
            </div>
            <div
              style={{
                paddingTop: 12,
                alignSelf: "center",
              }}
            >
              <input
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                }}
                type="submit"
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;
