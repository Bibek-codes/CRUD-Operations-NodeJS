const { application } = require('express');
const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

// get all employees
router.get('/', employeeController.getEmployeeList);

//get Employee by Id
router.get('/:id',employeeController.getEmployeeByID);

//create employee route
router.post('/',employeeController.createNewEmployee);

//update employee route
router.put('/:id',employeeController.updateEmployee);

//delete employee route
router.delete('/:id',employeeController.deleteEmployee);

module.exports=router;