/** @format */

export const getDepartmentCollection = () => [
  { id: 1, title: 'Sales' },
  { id: 2, title: 'Marketing' },
  { id: 3, title: 'Engineering' },
  { id: 4, title: 'Human Resources' },
  { id: 5, title: 'Legal' }
]

export const getStateCollection = () => [
  { id: 1, title: 'Alabama' },
  { id: 2, title: 'Alaska' },
  { id: 3, title: 'American Samoa' },
  { id: 4, title: 'Arizona' },
  { id: 5, title: 'Arkansas' },
  { id: 6, title: 'California' },
  { id: 7, title: 'Colorado' },
  { id: 8, title: 'Connecticut' },
  { id: 9, title: 'Delaware' },
  { id: 10, title: 'District Of Columbia' },
  { id: 11, title: 'Federated States Of Micronesia' },
  { id: 12, title: 'Florida' },
  { id: 13, title: 'Georgia' },
  { id: 14, title: 'Guam' },
  { id: 15, title: 'Hawaii' },
  { id: 16, title: 'Idaho' },
  { id: 17, title: 'Illinois' },
  { id: 18, title: 'Indiana' },
  { id: 19, title: 'Iowa' },
  { id: 20, title: 'Kansas' },
  { id: 21, title: 'Kentucky' },
  { id: 22, title: 'Louisiana' },
  { id: 23, title: 'Maine' },
  { id: 24, title: 'Marshall Islands' },
  { id: 25, title: 'Maryland' },
  { id: 26, title: 'Massachusetts' },
  { id: 27, title: 'Michigan' },
  { id: 28, title: 'Minnesota' },
  { id: 29, title: 'Mississippi' },
  { id: 30, title: 'Missouri' },
  { id: 31, title: 'Montana' },
  { id: 32, title: 'Nebraska' },
  { id: 33, title: 'Nevada' },
  { id: 34, title: 'New Hampshire' },
  { id: 35, title: 'New Jersey' },
  { id: 36, title: 'New Mexico' },
  { id: 37, title: 'New York' },
  { id: 38, title: 'North Carolina' },
  { id: 39, title: 'North Dakota' },
  { id: 40, title: 'Northern Mariana Islands' },
  { id: 41, title: 'Ohio' },
  { id: 42, title: 'Oklahoma' },
  { id: 43, title: 'Oregon' },
  { id: 44, title: 'Palau' },
  { id: 45, title: 'Pennsylvania' },
  { id: 46, title: 'Puerto Rico' },
  { id: 47, title: 'Rhode Island' },
  { id: 48, title: 'South Carolina' },
  { id: 49, title: 'South Dakota' },
  { id: 50, title: 'Tennessee' },
  { id: 51, title: 'Texas' },
  { id: 52, title: 'Utah' },
  { id: 53, title: 'Vermont' },
  { id: 54, title: 'Virgin Islands' },
  { id: 55, title: 'Virginia' },
  { id: 56, title: 'Washington' },
  { id: 57, title: 'West Virginia' },
  { id: 58, title: 'Wisconsin' },
  { id: 59, title: 'Wyoming' }
]

const KEYS = {
  employees: 'employees',
  employeeId: 'employeeId'
}

export function insertEmployee(data) {
  let employees = getAllEmployees()
  data['id'] = generateEmployeeId()
  employees.push(data)
  localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, '0')
  var id = parseInt(localStorage.getItem(KEYS.employeeId))
  localStorage.setItem(KEYS.employeeId, (++id).toString())
  return id
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]))
  let employees = JSON.parse(localStorage.getItem(KEYS.employees))
  let departments = getDepartmentCollection()
  let states = getStateCollection()
  return employees.map((employee) => ({
    ...employee,
  department: departments[employee.departmentId - 1].title,
  state: states[employee.stateId - 1].title
  }))
}
