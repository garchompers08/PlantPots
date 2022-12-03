class Addition:
    def __init__(self, addends1, addends2):
        self.addends1 = addends1
        self.addends2 = addends2
    def add(self):
        return self.addends1+self.addends2
addends1 = int(input("Enter the first addends: "))
addends2 = int(input("Enter the second addends: "))
sum = Addition(addends1, addends2)
print("Sum: ", sum.add())