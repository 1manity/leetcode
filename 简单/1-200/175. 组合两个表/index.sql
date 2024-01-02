# Write your MySQL query statement below
select Firstname,lastname,city,state from Person left join Address on Person.PersonId = Address.PersonId