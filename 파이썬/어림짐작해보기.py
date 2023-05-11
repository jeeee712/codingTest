import time, random
def printAllTimeTable(time): #주어진 숫자부터 9단까지 출력
    for start in range(time, 10):
        for multiply in range(10):
            print("%d * %d = %d" % (start, multiply, start * multiply))

def printTimeTable(time): # 주어진 숫자의 단만 출력
    for i in range(10):
        print("%d * %d = %d" %(time, i, time * i))

data = [random.randrange(1,10) for i in range(100000)] # 10만 개의 무작위 숫자 생성
startTime = time.time()

for num in data: #n단 구구단 출력
    printTimeTable(num)
print('elapsed time: %f' % (time.time() - startTime))

startTime = time.time()

for num in data: #n단-9단 구구단 출력
    printAllTimeTable(num)
print('elapsed time: %f' %(time.time() - startTime))
