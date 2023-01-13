# https://leetcode.com/problems/sum-of-two-integers/description/

# Given two integers a and b, return the sum of the two integers without using the operators + and -.


a = 1
b = 2

class Solution:
    def getSum(self, a: int, b: int) -> int:
        return sum([a, b])

chars = [a,b]
total = 0