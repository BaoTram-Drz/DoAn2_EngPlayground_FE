import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
import {ManagerListContainer, PageName, Table, TableHeader, TableHeaderNone, TableRow, 
  TableCellNone, TableCell, FloatRight, Button, Links, TIH} from './ManagerList.styled'

import { getManagers, deleteManager } from "../../../API/managerApi";

function ManagerList() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the database
    const fetchData = async () => {
      try {
        // Simulate data with IDs, names, emails, and dates of birth
        // const mockData = [
        //   { id: 1, name: 'John Doe', email: 'john.doe@example.com', dob: '1990-01-15' },
        //   { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', dob: '1985-05-20' },
        //   { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', dob: '1980-11-08' },
        // ];
        const response = await getManagers();
        console.log(response);
        setManagers(response);
      } catch (error) {
        console.error("Error fetching manager data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteManager = async (managerId) => {
    // Use SweetAlert2 to confirm the deletion
    Swal.fire({
      title: "Are you sure you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes," proceed with deletion
        const updatedManagers = managers.filter(
          (manager) => manager._id !== managerId
        );

        const response = deleteManager(managerId);

        setManagers(updatedManagers);

        Swal.fire("Deleted!", "Manager has been deleted.", "success");
      }
    });
  };

  return (
    <ManagerListContainer>
      <PageName>Manager List</PageName>
      <Table>
        <thead>
          <tr>
            <TableHeaderNone><TIH>ID</TIH></TableHeaderNone>
            <TableHeader><TIH>Name</TIH></TableHeader>
            <TableHeader><TIH>Email</TIH></TableHeader>
            <TableHeaderNone><TIH>Date of Birth</TIH></TableHeaderNone>
            <TableHeader><TIH>Action</TIH></TableHeader>
          </tr>
        </thead>
        <tbody>
          {managers.map((manager) => (
            <TableRow key={manager._id}>
              <TableCell>{manager._id}</TableCell>
              <TableCell>{manager.name}</TableCell>
              <TableCell>{manager.email}</TableCell>
              <TableCell>{manager.dateofbirth}</TableCell>
              <TableCell>
                <Button onClick={() => handleDeleteManager(manager._id)}>
                  <RiDeleteBin5Line />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <FloatRight>
        <Button>
          <Links to="/createmanager"> + Add Manager</Links>
        </Button>
      </FloatRight>
    </ManagerListContainer>
  );
}

export default ManagerList;
