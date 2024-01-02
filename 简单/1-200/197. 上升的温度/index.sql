# Write your MySQL query statement below
select t1.id FROM Weather t1
JOIN Weather t2
on DATEDIFF(t1.recordDate , t2.recordDate ) = 1
where t1.Temperature  > t2.Temperature
