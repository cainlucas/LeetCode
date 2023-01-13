from typing import List

class Solution:
    def singleNumber(nums: List[int]) -> int:

        i = 0
        l = []
        while i < len(nums) :
            digit = nums[i]
            nums.remove(nums[i])
            if digit in nums or digit in l:
                l.append(digit)
            else :
                return digit
        return 0
    print(singleNumber([2,2,1]))