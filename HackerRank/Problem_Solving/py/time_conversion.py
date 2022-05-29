# import re

def timeConversion(s: str):
# Write your code here
    pattern = r":"
    log = s.split(pattern)
    set_time = log[2][2:]

    if set_time == "AM" and int(log[0]) < 12:
        result = f"{log[0]}:{log[1]}:{log[2][:2]}"
    elif set_time == "PM" and int(log[0]) < 12:
        result = f"{int(log[0])+12}:{log[1]}:{log[2][:2]}"
    elif set_time == "AM":
        result = f"00:{log[1]}:{log[2][:2]}"
    else:
        result = f"{log[0]}:{log[1]}:{log[2][:2]}"

    print(result)

timeConversion("12:45:54PM")
