import RPi.GPIO as gp
from time import sleep
gp.setmode(gp.BOARD)
gp.setup(16,gp.IN)
gp.setup(18,gp.OUT)
while True:
    try:
        gp.output(18, not gp.input(16))
    except KeyboardInterrupt:
        gp.cleanup()
        break
