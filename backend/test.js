import * as lead from "./data/leads.js";
import { getAllDueDates } from "./data/calendar.js";
import * as projects from "./data/projects.js";
import * as users from "./data/users.js";
import * as tasks from "./data/tasks.js";
import bcrypt from "bcrypt";

try {
    let test1 = await lead.getAllLeads();
} catch (error) {
    console.log(error)
}

try {
    var req = {};
    req.body = {firstName: "Olivia", lastName: "Eng", Number: "333-333-3333", Success: "True"};
    var test2 = await lead.createLead(req);
} catch (error) {
    console.log(error)
}

try {
    var req = {};
    req.params = {id: test2.insertedId.toString()};
    let test3 = await lead.getLead(req);
} catch (error) {
    console.log(error)
}

try {
    let test4 = await lead.getSuccessfulLeads();
} catch (error) {
    console.log(error)
}

try {
    req = {};
    req.body = {firstName: "Oliviaaaaaaa", lastName: "Eng", Number: "333-333-3333", Success: "True"};
    req.params = {id: test2.insertedId.toString()};
    let test5 = await lead.updateLead(req);
} catch (error) {
    console.log(error)
}

try {
    req = {};
    req.params = {id: test2.insertedId.toString()};
    let test6 = await lead.deleteLead(req);
} catch (error) {
    console.log(error)
}

try {
    let test7 = await projects.getAllProjects();
} catch (error) {
    console.log(error)
}

try {
    var req = {};
    req.body = {
        name: "Test Project",
        startDate:"2023-04-20",
        endDate:"2023-04-28",
        progress:"Installing",
        status:"",
        billingStatus: "",
        users: "users",
        permitStatus: "permit",
        laborHours: "laborHours",
        materialDetails: "This is a test for the material details", solarSystemInfo:"solarSystemInfo",
        inspectionInfo: "inspectionInfo", closeOutInfo: "closeOutInfo",
        AssignedManagers:["64362fbccf0641417b52a849","6441c24e14c6a7032c00c624","6441f364bd0756a324d50735"]
    }
    var test8 = await projects.createProject(req);;
} catch (error) {
    console.log(error)
}

try {
    req = {};
    req.params = {id: test8.toString()};
    let test9 = await projects.getProject(req);
} catch (error) {
    console.log(error)
}

try {
    req = {};
    req.params = {id: test8.toString()}
    let test10 = await getAllDueDates(req);
} catch (error) {
    console.log(error)
}

try {
    req = {};
    req.params = {id: test8.toString()}
    let test11 = await projects.getUserProjects(req);
} catch (error) {
    console.log(error)
}

try {
    var req = {};
    req.params = {id: test8.toString()}
    req.body = {
        name: "Test Projecttttttttttttttttt",
        startDate:"2023-04-20",
        endDate:"2023-04-28",
        progress:"Installing",
        status:"",
        billingStatus: "",
        users: "users",
        permitStatus: "permit",
        laborHours: "laborHours",
        materialDetails: "This is a test for the material details", solarSystemInfo:"solarSystemInfo",
        inspectionInfo: "inspectionInfo", closeOutInfo: "closeOutInfo",
        AssignedManagers:["64362fbccf0641417b52a849","6441c24e14c6a7032c00c624","6441f364bd0756a324d50735"]
    }
    var test12 = await projects.updateProject(req);;
} catch (error) {
    console.log(error)
}

try {
    req = {};
    req.params = {id: test8.toString()}
    let test13 = await projects.deleteProject(req);
} catch (error) {
    console.log(error)
}

try {
    req = {};
    const salt = await bcrypt.genSalt(10);
    let hashpass = await bcrypt.hash("MynameisOlivia", salt);
    req.body = {firstName: "Oliviaaaaaaa", lastName: "Eng", role: "client", email: "oeeeeeng@stevens.edu", phoneNumber: "9999999999", password: hashpass};
    var test14 = await users.createUser(req.body);
} catch (error) {
    console.log(error)
}

try {
    let test15 = await users.userLogin("notindatabase@stevens.edu", "Test");
} catch (error) {
    console.log(error)
}

try {
    let test16 = await users.getAllUsers();
} catch (error) {
    console.log(error)
}

try {
    let test17 = await users.getUserById(test14._id.toString());
} catch (error) {
    console.log(error)
}

try {
    let test18 = await users.deleteUser(test14._id.toString());
} catch (error) {
    console.log(error)
}

try {
    let test19 = await tasks.getAllTasks();
} catch (error) {
    console.log(error)
}

try {
    req = {};
    req.body = {
        task: "test",
        proirity:"test",
        type: "test",
        address:"test",
        owner: "644862463820aedfcc8335bd"
    }
    var test20 = await tasks.createTask(req);
} catch (error) {
    console.log(error)
}

try {
    req = {};
    req.params = {id: test20.toString()}
    let test21 = await tasks.getTask(req);
} catch (error) {
    console.log(error)
}

try {
    req = {};
    req.params = {id: "644862463820aedfcc8335bd"}
    let test22 = await tasks.getTasks(req);
} catch (error) {
    console.log(error)
}

try {
    req = {};
    req.params = {id: test20.toString()}
    req.body = {
        task: "testtttttttttttttttttttttttttttt",
        proirity:"test",
        type: "test",
        address:"test",
        owner: "644862463820aedfcc8335bd"
    }
    var test23 = await tasks.updateTask(req);
} catch (error) {
    console.log(error)
}

try {
    req = {};
    req.params = {id: test20.toString()}
    var test24 = await tasks.deleteTask(req);
} catch (error) {
    console.log(error)
}
