print("Welcome to my computer quiz!")

playing = input("Do you want to play? ")

if playing.lower() != "yes":
    quit()

print("Okay! Let's play :)")
print("\n")

score = 0

## First Question
answer = input("What does CPU stand for? ")

if answer.lower() == "central proccessing unit":
    print("Correct!")
    score += 1
    print("Now your score is ", score)
    print("\n")
else:
    print("Incorrect")
    print("Your score is still ", score)
    print("\n")

## Second Question
answer = input("What PSU stand for? ")

if answer.lower() == "power supply unit":
    print("Correct!")
    score += 1
    print("Now your score is ", score)
    print("\n")
else:
    print("Incorrect")
    print("Your score is still ", score)
    print("\n")

## Third Question
answer = input("What does GPU stand for? ")

if answer.lower() == "graphics proccessing unit":
    print("Correct!")
    score += 1
    print("Now your score is ", score)
    print("\n")
else:
    print("Incorrect")
    print("Your score is still ", score)
    print("\n")

## Fourth Question
answer = input("What does RAM stand for? ")

if answer.lower() == "random access memory":
    print("Correct!")
    score += 1
    print("Now your score is ", score)
    print("\n")
else:
    print("Incorrect")
    print("Your score is still ", score)
    print("\n")

print("You got " + str(score) + " question(s) correct!")
print("Which is " + str((score / 4) * 100) + "%")
