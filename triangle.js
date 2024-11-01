                var firstSide;
                var secondSide;
                var thirdSide;
        
                    document.getElementById("submit").onclick = function(){
                        firstSide = document.getElementById("sideA").value;
                        secondSide = document.getElementById("sideB").value;
                        thirdSide = document.getElementById("sideC").value;

                        switch (true){
                            case firstSide === "" || secondSide === "" || thirdSide === "":
                            document.getElementById("triangle").innerHTML = "Missing value. Try again."    
                            break;

                            case firstSide==secondSide && firstSide==thirdSide: 
                            let a = "Triangle is Equilateral";
                            document.getElementById("triangle").innerHTML = a;
                            break;

                            case firstSide != secondSide && firstSide == thirdSide:
                            let b = "Triangle is Isosceles";
                            document.getElementById("triangle").innerHTML = b;
                            break;

                            case firstSide == secondSide && firstSide != thirdSide:
                            let c = "Triangle is Isosceles";
                            document.getElementById("triangle").innerHTML = c;
                            break;

                            case firstSide != secondSide && secondSide == thirdSide:
                            let d = "Triangle is Isosceles";
                            document.getElementById("triangle").innerHTML = d;
                            break;
                            
                            case firstSide != secondSide && firstSide != thirdSide:
                            let e = "Triangle is Scalene";
                            document.getElementById("triangle").innerHTML = e; 
                            break;
                            
                            default:document.getElementById("triangle").innerHTML = "Invalid Input. Please enter numerical number only.";  
                        }
                      document.getElementById("refresh").innerHTML =  "<button onClick=location.reload();>Refresh</button>";
                    }
