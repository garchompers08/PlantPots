def press_it(self, pressed):
    if pressed == "C":
        self.outputLabel.setText("0")
    else:
        #Check to see if it starts with 0 and delete 0
	if self.outputLabel.text() == "0":
            self.outputLabel.setText("")
	#Concatenate the pressed button with what was there already
	self.outputLabel.setText(f'{self.outputLabel.text()}{pressed}')

