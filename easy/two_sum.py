
from typing import List


class Solution:
    def twoSum(nums: List[int], target: int) -> List[int]:
        lookup = {}
        for i in range(len(nums)):
            if target-nums[i] in lookup:
                return [lookup[target-nums[i]], i]
            lookup[nums[i]] = i
        return lookup
    print(twoSum([2,7,11,15], 9))