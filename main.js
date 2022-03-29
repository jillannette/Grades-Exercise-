let testGrade = Math.floor(Math.random() * 101);

gradeAssignment = (testGrade) => {
  if (testGrade >= 90) {
  console.log('Congratulations, your test score was ' + testGrade + ', you got an A!');
   } else if (testGrade >= 80 && testGrade < 90) {
      console.log('Good job, your test score was ' + testGrade + ', which means you got a B.');
  } else if (testGrade >=70 && testGrade < 80) {
      console.log('Your test score was ' + testGrade + ' , which means you got a C.'); 
    } else if (testGrade >= 65 && testGrade < 70) {
        console.log('You\'ll need to study more.  Your test score was ' + testGrade + ' and you got a D.');
      } else if (testGrade >=0 && testGrade < 65) {
          console.log('I\'m sorry, but you failed the test.  Your test score was ' + testGrade + ' which means you\'ll have to take the test again.');
        }
      };

  console.log(gradeAssignment(testGrade));
