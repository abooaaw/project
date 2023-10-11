import numpy as np

def myFunctionQ(x):
  return 100*(2*x+5)

def myDataPoints(x):
  y = np.zeros(len(x))
  for j in range(0, len(x)):
    y[j] = myFunctionQ(x[j])
    print("x=", x[j], "y=", y[j])

x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30])
myDataPoints(x)