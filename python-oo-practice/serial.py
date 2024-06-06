"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start=0):
        self.start = start
        self.next_serial = start

    def generate(self):
        self.next_serial += 1
        return self.next_serial - 1

    def reset(self):
        self.next_serial = self.start

