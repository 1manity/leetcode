# Write your MySQL query statement below
select
    b.name as 'Employee'
from
    Employee as a,Employee as b
where
    a.salary < b.salary and a.id = b.managerId
