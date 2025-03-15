const Courses = [
  {
    name: "Full Stack ",
    duration: "6 months",
    startDate: "2025-04-01",
  },
  {
    name: " Machine Learning",
    duration: "5 months",
    startDate: "2025-04-15",
  },
  {
    name: "Cybersecurity ",
    duration: "3 months",
    startDate: "2025-05-01",
  },
  {
    name: "Cloud Computing",
    duration: "4 months",
    startDate: "2025-05-10",
  },
  {
    name: "Mobile App Development ",
    duration: "5 months",
    startDate: "2025-04-25",
  },
  {
    name: "UI/UX Design Principles",
    duration: "2 months",
    startDate: "2025-04-05",
  },
  {
    name: "Networking Essentials (CCNA)",
    duration: "3 months",
    startDate: "2025-05-20",
  },
  {
    name: "DevOps and CI/CD Pipelines",
    duration: "4 months",
    startDate: "2025-06-01",
  },
];
const students = [
  {
    name: "Ali",
    course: "Full Stack ",
    enrollmentDate: "2025-03-20",
  },
  {
    name: "",
    course: "Machine Learning",
    enrollmentDate: "2025-03-25",
  },
  {
    name: "yousef",
    course: "Cybersecurity ",
    enrollmentDate: "2025-04-01",
  },
  {
    name: "laila",
    course: "Cloud Computing ",
    enrollmentDate: "2025-04-15",
  },
  {
    name: "omar",
    course: "Mobile App Development",
    enrollmentDate: "2025-04-10",
  },
  {
    name: "nour",
    course: "UI/UX Design Principles",
    enrollmentDate: "2025-03-30",
  },
  {
    name: "rana",
    course: "Networking Essentials (CCNA)",
    enrollmentDate: "2025-05-05",
  },
  {
    name: "Ahmed",
    course: "DevOps and CI/CD Pipelines",
    enrollmentDate: "2025-05-20",
  },
];
//getting course Information by its name
function getInfo(n, arr = Courses) {
  const filteredCourses = arr.filter((c) => c.name.includes(n));
  console.log(filteredCourses);
}

//adding new course
function newcourse(name, duration, startDate) {
  const course = {};
  course.name = name;
  course.duration = duration;
  course.startDate = startDate;

  Courses.push(course);
}

//getting students Course and details about it
function MyCourse(arr, student) {
  const Mystudent = arr.find((s) => s.name === student);
  let c = Mystudent.course;
  console.log(
    ` Dear ${Mystudent.name} you are enrolled in ${Mystudent.course} and here is your course info`
  );
  console.log(getInfo(c));
}
newcourse("NodeJs", "4 months", "2025-3-3");
console.log(Courses[8]);
getInfo("Stack");
MyCourse(students, "nour");
