import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { RiDeleteBin5Line } from "react-icons/ri";
import {ManagerListContainer, PageName, Table, TableHeader, TableRow, 
  TableCell, FloatRight, Button, Links} from './ManagerList.styled'

function ManagerList() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the database
    const fetchData = async () => {
      try {
        // Simulate data with IDs, names, emails, and dates of birth
        const mockData = [
          { id: 1, name: 'John Doe', email: 'john.doe@example.com', dob: '1990-01-15' },
          { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', dob: '1985-05-20' },
          { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', dob: '1980-11-08' },
        ];

        setManagers(mockData);
      } catch (error) {
        console.error('Error fetching manager data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteManager = (managerId) => {
    // Use SweetAlert2 to confirm the deletion
    Swal.fire({
      title: 'Are you sure you want to delete it?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes," proceed with deletion
        const updatedManagers = managers.filter((manager) => manager.id !== managerId);
        setManagers(updatedManagers);

        Swal.fire('Deleted!', 'Manager has been deleted.', 'success');
      }
    });
  };

  return (
    <ManagerListContainer>
      <PageName>Manager List</PageName>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Date of Birth</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {managers.map((manager) => (
            <TableRow key={manager.id}>
              <TableCell>{manager.id}</TableCell>
              <TableCell>{manager.name}</TableCell>
              <TableCell>{manager.email}</TableCell>
              <TableCell>{manager.dob}</TableCell>
              <TableCell>
                <Button onClick={() => handleDeleteManager(manager.id)}>
                  <RiDeleteBin5Line/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <FloatRight>
        <Button>
          <Links to='/createmanager'> + Add Manager</Links>      
        </Button>
      </FloatRight>
    </ManagerListContainer>
  );
}

export default ManagerList;
