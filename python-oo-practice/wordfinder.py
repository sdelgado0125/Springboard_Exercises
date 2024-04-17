"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    def __init__(self, pathfile):
        self.pathfile = pathfile
        self.words = self.read_words()
        print(f"{len(self.words)} words read")

    def read_words(self):
        with open(self.pathfile, 'r') as file:
            return [line.strip() for line in file if line.strip()]

    def random(self):
        return random.choice(self.words)

class SpecialWordFinder(WordFinder): 
    def read_words(self):
        with open(self.pathfile,'r') as file:
            return [line.strip() for line in file if line.strip() and not line.startswith('#')]