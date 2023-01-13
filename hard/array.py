def firstMissingPositive(nums):
    count = 1
    nums = sorted(nums)
    for i in nums:
        if i < count:
            continue
        elif i == count:
            count += 1
        else:
            return count
    return count


print(firstMissingPositive([3, 4, -1, 1]))
