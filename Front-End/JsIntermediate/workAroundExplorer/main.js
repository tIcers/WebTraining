// TODO: Add your import statements here.
import {getRoles, getCompanies from './salaryData.js'}
import {getAverageSalaryByRole, getSalaryAtCompany, getIndustryAverageSalary, getAverageSalaryByCompany 
from './workAroundModule.js'}
// TODO: Get the companies and roles using the salaryData module.
const companies = getCompanies();
const roles = getRoles();

// Create input buttons for every company and role represented in the data.
renderInputButtons(companies, "company");
renderInputButtons(roles, "role");

// This function will create a new <section> with radio
// inputs based on the data provided in the labels array.
function renderInputButtons(labels, groupName) {
  const container = document.createElement("section");
  container.setAttribute("id", `${groupName}Inputs`);

  let header = document.createElement("h3");
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach((label) => {
    // For each label...
    // Create the radio input element.
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "option");

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("name", groupName);
    inputElement.setAttribute("value", label);
    divElement.appendChild(inputElement);

    // Create a label for that radio input element.
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    // Update the results when the input is selected.
    inputElement.addEventListener("click", updateResults);

    container.appendChild(divElement);
  });

  document.querySelector("main").prepend(container);
}

function updateResults() {
  // Get the current selected company and role from the radio button inputs.
  const company = document.querySelector("input[name='company']:checked").value;
  const role = document.querySelector("input[name='role']:checked").value;

  // If either the company or role is unselected, return.
  if (!company || !role) {
    return;
  }

  // TODO: Use the workAroundModule functions to calculate the needed data.
  const averageSalaryByRole = 0;
  const averageSalaryByCompany = 0;
  const salary = 0;
  const industryAverageSalary = 0;

  // Render them t// Add your imports here.
  //
  // // Replace the empty array with the appropriate imported function/value
  // const getAverageSalaryByRole = role => {
  //   const roleData = [];
  //     const salariesOfRole = roleData.map(obj => obj.salary);
  //       return calculateAverage(salariesOfRole);
  //       }
  //
  //       // Replace the empty array with the appropriate imported function/value
  //       const getAverageSalaryByCompany = company => {
  //         const companyData = [];
  //           const salariesAtCompany = companyData.map(obj => obj.salary);
  //             return calculateAverage(salariesAtCompany);
  //             }
  //
  //             // Replace the empty array with the appropriate imported function/value
  //             const getSalaryAtCompany = (role, company) => {
  //               const companyData = [];
  //                 const roleAtCompany = companyData.find(obj => obj.role === role);
  //                   return roleAtCompany.salary;
  //                   }
  //
  //                   // Replace the empty array with the appropriate imported function/value
  //                   const getIndustryAverageSalary = () => {
  //                     const allSalaries = [].map(obj => obj.salary);
  //                       return calculateAverage(allSalaries);
  //                       }
  //
  //
  //                       // Helper Function. Do not edit.
  //                       // Note: This function does not need to be exported since it is only used by the functions contained within this module.
  //                       function calculateAverage(arrayOfNumbers) {
  //                         let total = 0;
  //                           arrayOfNumbers.forEach(number => total += number);
  //                             return (total / arrayOfNumbers.length).toFixed(2);
  //                             }
  //
  //
  //                             o the screen.lkj
  document.getElementById(
    "salarySelected"
  ).innerText = `The salary for ${role}s at ${company} is \$${salary}`;
  document.getElementById(
    "salaryAverageByRole"
  ).innerText = `The industry average salary for ${role} positions is \$${averageSalaryByRole}`;
  document.getElementById(
    "salaryAverageByCompany"
  ).innerText = `The average salary at ${company} is \$${averageSalaryByCompany}`;
  document.getElementById(
    "salaryAverageIndustry"
  ).innerText = `The average salary in the Tech industry is \$${industryAverageSalary}`;
}
