let Courses = [
  { name: "Full Stack", duration: "6 months", startDate: "2025-04-01" },
  { name: " Machine Learning", duration: "5 months", startDate: "2025-04-15" },
  { name: "Cybersecurity ", duration: "3 months", startDate: "2025-05-01" },
  { name: "Cloud Computing", duration: "4 months", startDate: "2025-05-10" },
];
let students = ["Ali", "leen", "yousef", "laila"];

//getting course Information by its name
function getInfo(courseName) {
  let Course = Courses.find(
    (c) => c.name.toLowerCase() === courseName.toLowerCase()
  );
  if (Course) return Course;
  else console.log(`course ${Course} not found `);
}

//adding new course
function newcourse(name, duration, startDate) {
  const course = {
    name: name,
    duration: duration,
    startDate: startDate,
  };
  Courses.push(course);
}

function Register(studentName, CourseName) {
  if (getInfo(CourseName))
    console.log(
      ` Dear ${studentName},you have successfully Registered in ${CourseName} course`
    );
  else console.log(` Dear ${studentName}, ${CourseName} course does not exist`);
}
newcourse("NodeJs", "4 months", "2025-3-3");
console.log(Courses);
getInfo("full stack");
Register("nour", "full stack");
