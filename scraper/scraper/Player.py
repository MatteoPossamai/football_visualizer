class Player: 
    def __init__(self, name, number, position, is_captain=False):
        self.name = name
        self.number = number
        self.position = position

    def __str__(self):
        return f"Player: {self.name}, Number: {self.number}, Position: {self.position}"

    def __repr__(self):
        return f"Player: {self.name}, Number: {self.number}, Position: {self.position}"

    def to_json(self):
        return {
            "name": self.name,
            "number": self.number,
            "position": self.position
        }