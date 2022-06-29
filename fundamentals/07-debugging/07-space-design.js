// Roles (salary still to be determined)

const ceo = {
  tasks: ["company strategy", "resource allocation", "performance monitoring"],
  salary: 0,
};

const developer = {
  tasks: ["turn product vision into code"],
  salary: 0,
};

const scrumMaster = {
  tasks: ["organize scrum process", "manage scrum teams"],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

// `ceo` and `scrumMaster` are interpreted as variables referencing objects
// objects are being converted to string `'[object Object]' and set as property names (overwriting)
// team[ceo] = "Kim";
// team[scrumMaster] = "Alice";
// team[developer] = undefined;
team["ceo"] = "Kim";
team["scrumMaster"] = "Alice";
team["developer"] = undefined;

const company = {
  name: "Space Design",
  team, // Shorthand: JS finds variable `teams` and sets it as the property value.
  projectedRevenue: 500000,
};

// `ceo` and `scrumMaster` are interpreted as variables referencing functions. Use quotes.
console.log(`----{ ${company.name} }----`);
// console.log(`CEO: ${company.team[ceo]}`);
// console.log(`Scrum master: ${company.team[scrumMaster]}`);
console.log(`CEO: ${company.team["ceo"]}`);
console.log(`Scrum master: ${company.team["scrumMaster"]}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000
