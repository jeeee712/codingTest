from sys import getsizeof
import time

# 리스트 컴프리헨션
comprehension = [num ** 2 for num in range(1000000)]
startTime = time.time()
sum_comprehension = sum(comprehension)
print("comprehension time: %f" %9 (time.time() - startTime))
print("comprehension memery size: %dByte. which means %dMB" % (getsizeof(comprehension))),
getsizeof(comprehension / 1024 / 1024)

# 제너레이터
generator = (num ** 2 for num in range(1000000))
startTime = time.time()
sum_generator = sum(generator)
print("generator time: %f" %(time.time() - startTime))
print("generator memory size: %dByte" % getsizeof(generator))