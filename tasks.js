function task1(age){
    if(age <= 2){
        console.log("младенец");
    }
    else if(age <= 13){
        console.log("ребенок");
    }
    else if (age <= 19){
        console.log("подросток");
    }
    else if (age <= 65){
        console.log("взрослый");
    }
    else if (age >= 65){
        console.log("пожилой");
    }
}
//task1(20);
//task1(1);
//task1(100);

function task2(num, roun){
    if(roun > 15){
        roun = 15;
    }
    console.log(parseFloat(num.toFixed(roun)));
}
//task2(3.1415926535897932384626433832795, 2);
//task2(10.5,3);

function task3(num){
    if(num % 10 == 0){
        console.log("Число делится на 10");
    }
    else if (num % 7 == 0){
        console.log("Число делится на 7");
    }
    else if (num % 6 == 0){
        console.log("Число делится на 6");
    }
    else if (num % 3 == 0){
        console.log("Число делится на 3");
    }
    else if (num % 2 == 0){
        console.log("Число делится на 2");
    }
    else console.log("Не делится");
}
//task3(30);
//task3(15);
//task3(12);
//task3(1643);

function task4(num, group, day){
    if(day == "Friday"){
        if (group == "Students"){
            if(num >= 30){
               price = 8.45 * num - (8.45 * num * 0.15);
               console.log("Total price: ", price.toFixed(2));
            }
            else{
               price = 8.45 * num;
               console.log("Total price: ", price.toFixed(2));
            }
        }
        else if (group == "Regular"){
            if(num >=10 && num <= 20){
                price = 15 * num - (15 * num * 0.05);
                console.log("Total price: ", price.toFixed(2));
            }
            else{
                price = 15 * num;
                console.log("Total price: ", price.toFixed(2));
            }
        }
        else{
            if(num >= 100){
                price = (num - 10) * 10.90;
                console.log("Total price: ", price.toFixed(2));
            }
            else{
                price = num * 10.90;
                console.log("Total price: ", price.toFixed(2));
            }
        }
    }
    else if(day == "Saturday"){
        if (group == "Students"){
            if(num >= 30){
               price = 9.80 * num - (9.80 * num * 0.15);
               console.log("Total price: ", price.toFixed(2));
            }
            else{
               price = 9.80 * num;
               console.log("Total price: ", price.toFixed(2));
            }
        }
        else if (group == "Regular"){
            if(num >=10 && num <= 20){
                price = 20 * num - (20 * num * 0.05);
                console.log("Total price: ", price.toFixed(2));
            }
            else{
                price = 20 * num;
                console.log("Total price: ", price.toFixed(2));
            }
        }
        else{
            if(num >= 100){
                price = (num - 10) * 15.60;
                console.log("Total price: ", price.toFixed(2));
            }
            else{
                price = num * 15.60;
                console.log("Total price: ", price.toFixed(2));
            }
        }
    }
    else if(day == "Sunday"){
        if (group == "Students"){
            if(num >= 30){
               price = 10.46 * num - (10.46 * num * 0.15);
               console.log("Total price: ", price.toFixed(2));
            }
            else{
               price = 10.46 * num;
               console.log("Total price: ", price.toFixed(2));
            }
        }
        else if (group == "Regular"){
            if(num >=10 && num <= 20){
                price = 22.50 * num - (22.50 * num * 0.05);
                console.log("Total price: ", price.toFixed(2));
            }
            else{
                price = 22.50 * num;
                console.log("Total price: ", price.toFixed(2));
            }
        }
        else{
            if(num >= 100){
                price = (num - 10) * 16;
                console.log("Total price: ", price.toFixed(2));
            }
            else{
                price = num * 16;
                console.log("Total price: ", price.toFixed(2));
            }
        }
    }
}
//task4(30, "Students", "Sunday");
//task4(40, "Regular", "Saturday");

function task5(year){
    if (year % 4 == 0 && year % 100 != 0){
        console.log("yes");
    }
    else if(year % 4 == 0 || year % 400 == 0){
        console.log("yes");
    }
    else console.log("no");
}
task5(1984);
task5(2003);
task5(4);
