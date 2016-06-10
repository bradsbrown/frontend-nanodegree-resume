// var name='Brad Brown';
// var formattedName = HTMLheaderName.replace('%data%', name);
//
// var role='Fullstack Developer';
// var formattedRole=HTMLheaderRole.replace('%data%', role);
//
// $('#header').prepend(formattedRole);
// $('#header').prepend(formattedName);

var skills = ["Python", "SQL", "Team Management", "Leadership Development"]

var d = "%data%"

var bio = {
  "name": "Brad Brown",
  "role": "Fullstack Developer",
  "phone": "254-715-9931",
  "email": "brad@bradsbrown.com",
  "picture": "http://bradsbrown.com/brad.jpg",
  "welcome": "Resumes are cool",
  "skills": skills
};

var work = {};

work.position = "Director of Operations";
work.years = "2011 - Present";
work.city = "Austin, TX";
work.employer = "Texmash Holdings, LLC"

var education = [];

education['school'] = "Baylor University";
education['city'] = "Waco, TX"
education['years'] = "2000-2004"

var formattedName = HTMLheaderName.replace(d, bio.name);
var formattedRole = HTMLheaderRole.replace(d, bio.role);
var formattedMobile = HTMLmobile.replace(d, bio.phone);
var formattedEmail = HTMLemail.replace(d, bio.email);
var formattedPict = HTMLbioPic.replace(d, bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace(d, bio.welcome);


var formattedPosition = HTMLworkTitle.replace(d, work.position);
var formattedWorkYears = HTMLworkDates.replace(d, work.years);
var formattedWorkCity = HTMLworkLocation.replace(d, work.city);
var formattedEmployer = HTMLworkEmployer.replace(d, work.employer);


var formattedSchool = HTMLschoolName.replace(d, education['school']);
var formattedSchoolCity = HTMLschoolLocation.replace(d, education['city']);
var formattedSchoolYears = HTMLschoolDates.replace(d, education['years']);


$('#education').append(formattedSchool);
$('#education').append(formattedSchoolCity);
$('#education').append(formattedSchoolYears);

$('#workExperience').append(formattedPosition);
$('#workExperience').append(formattedEmployer);
$('#workExperience').append(formattedWorkYears);
$('#workExperience').append(formattedWorkCity);

$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedMobile);

for (i=0; i < skills.length; i++){
  var skill = skills[i];
  var formattedSkill = HTMLskills.replace(d, skill);
  $('#header').prepend(formattedSkill);
};

$('#header').prepend(formattedWelcome);

$('#header').prepend(formattedPict);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
