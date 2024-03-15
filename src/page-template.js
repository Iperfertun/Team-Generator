
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" 
    crossorigin="anonymous"/>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"/>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <!--stylesheet link-->
    <link rel="stylesheet" href="styles.css" />
    <meta name="description" content="Team generator create a profiles for the team which contain: Name, Email, Position, Address, Contact etc. ">
    <meta name="keywords" content="Employee profile, Manager profile, Engineer profile, intern profile, ">
    <title>Team Profile Generator</title>
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron text-white mb-3">
            <h1 class="text-center">The Dream Team</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="main-section col-12 d-flex justify-content-center">
            ${createProfile(team)}
        </div>
    </div>
</div>
</body>

</html>
`;
};

// Create Team Profile
const createProfile = team => {

// Create Manager Profile
const createManager = manager => {
return `
<div class="card employee-card manager-card">
    <div class="card-header text-center">
        <h2 class="card-title">${manager.getName()}</h2>
        <h4 class="card-title">Title: ${manager.getRole()}</h4>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group text-dark">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
        </ul>
    </div>
</div>
`;
};

// Create Engineer Profile
const createEngineer = engineer => {
return `
<div class="card employee-card engineer-card">
    <div class="card-header text-center">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h4 class="card-title">Title: ${engineer.getRole()}</h4>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group text-dark">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
        </ul>
    </div>
</div>
`;
};

// Create Intern Profile
const createIntern = intern => {
return `
<div class="card employee-card intern-card">
    <div class="card-header text-center">
        <h2 class="card-title">${intern.getName()}</h2>
        <h4 class="card-title">Title: ${intern.getRole()}</h4>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group text-dark">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
`;
};

const html = [];

html.push(team
.filter(employee => employee.getRole() === 'Manager')
.map(manager => createManager(manager))
);
html.push(team
.filter(employee => employee.getRole() === 'Engineer')
.map(engineer => createEngineer(engineer))
.join("")
);
html.push(team
.filter(employee => employee.getRole() === 'Intern')
.map(intern => createIntern(intern))
.join("")
);

return html.join("");

}