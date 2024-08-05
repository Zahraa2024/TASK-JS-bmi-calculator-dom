function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let BMI = (weight / (height * 0.01)) ^ 2;
  alert(BMI);

  let BMIState = "state";

  if (BMI < 18.5) {
    BMIState = "Underweight";
  } else if (BMI < 25) {
    BMIState = "Healthy Weight";
  } else if (BMI < 30) {
    BMIState = "Overweight";
  } else {
    BMIState = "Above Obesity";
  }

  alert(BMIState);

if ( age>=19 && age <=24 && BMI>=19 && BMI<=24)
{ alert ("Healthy")}
else { alert ("Not Healthy")}

if ( age>=25 && age <=34 && BMI>=20 && BMI<=25)
  { alert ("Healthy")}
  else { alert ("Not Healthy")}

 if ( age>=35 && age <=44 && BMI>=21 && BMI<=26)
    { alert ("Healthy")}
    else { alert ("Not Healthy")}

    if ( age>=45 && age <=54 && BMI>=22 && BMI<=27)
      { alert ("Healthy")}
      else { alert ("Not Healthy")}

      if ( age>=55 && age <=64 && BMI>=23 && BMI<=28)
        { alert ("Healthy")}
        else { alert ("Not Healthy")}

        if ( age>65 && BMI>=24 && BMI<=29)
          { alert ("Healthy")}
          else { alert ("Not Healthy")}
}

