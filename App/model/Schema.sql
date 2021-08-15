create table tasks (
id int not null primary key auto_increment,
task_name varchar(100),
task_date DATE,
task_complete BOOLEAN,
task_time int(10)
);