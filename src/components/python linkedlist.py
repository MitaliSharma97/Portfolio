class Node:
    def __init__(self,data):
        self.prev=None
        self.data=data
        self.next=None
        
class DoublyLinkedList:
    head = None
    def add(self,data):
        if self.head==None:
            self.head=Node(data)
        else:
            temp=self.head   
            while(temp.next!=None):
                temp=temp.next
            temp.next=Node(data)
            temp.next.prev = temp
    def display(self):
        temp=self.head
        while temp:
            print(temp.data, end='')
            temp = temp.next        
        