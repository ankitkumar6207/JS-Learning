// very important for the interview , alot of questions will come from here 
call stack 

js execution context is the process of executing js code 

js does it in two phase 
jbhi js run hoga gce hoga hi 
whenever we run js code it creates global execution context and and in node env it is kept inside this 
in browswer the this object is having window object and in node env this is empty every env is having its own gce 



1. gce 
2. functional execution context 
3. eval execuation context 

whenjs run the code , it run in2 hase 
1. memory creation phase (creation phase)
2. execution phase 

in memory creation phase only memory allocation is done , no execution is there (any operation)



whenever we run any program 
1. global execution phase runs the code and store into this 
2. mcp(memory creation phase) only allocation of memory happens here ,all variable allocation is done in this phase  
3. execution phase 

for function calling in execution phase every time you call a functino it runs both mcp and executino phase for that function 
every time it will create new sandbox which is called new execution context and after comleting the task of this function 
that context will be deleted  

nve - new variable env 


call stack 
it is a kind of stack whereall function will come and then after execution it will go out 
every time that global execution context will there only 
, nested function execution image 5 it follows lifo concept 
insect source then create one js file and then create breakthrough 
check for nested function and see the call stack 


