const EmployeeModel = require('../models/employee.model');

// get all employee list
exports.getEmployeeList = (req, res)=> {
    //console.log('here all employees list');
    EmployeeModel.getAllEmployees((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', employees);
        res.send(employees)
    })
}

//get Employee by ID
exports.getEmployeeByID = (req,res) => {
    //console.log('get Employee by ID');
    EmployeeModel.getEmployeeByID(req.params.id ,(err,employee) => {
        if(err)
        res.send(err);
        console.log('Single employee data',employee);
        res.send(employee);
    })
}

//create new employee
exports.createNewEmployee = (req,res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    //check NULL
    if( req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }
    else{
        EmployeeModel.createEmployee(employeeReqData, (err,employee) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee created successfully' , data:employee.insertId})
        })
    }
}

//update employee
exports.updateEmployee = (req,res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    //check NULL
    if( req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }
    else{
        EmployeeModel.updateEmployee(req.params.id,employeeReqData, (err,employee) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee updated successfully' , data:employee.insertId})
        })
    }
}

//delete employee
exports.deleteEmployee = (req,res) => {
    EmployeeModel.deleteEmployee(req.params.id, (err,employee) => {
        if(err)
        res.send(err);
        res.json({status:true,message:'Employee deleted successfully'});
    })
}