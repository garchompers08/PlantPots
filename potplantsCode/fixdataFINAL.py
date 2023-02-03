import json

# Open the file and read its contents
with open("data.json", "r") as file:
    data = file.read()

# Split the contents into a list of JSON objects
data = data.split("}")

# Remove the last empty string in the list
data = data[:-1]

# Add a closing brace to each JSON object
for i in range(len(data)):
    data[i] = data[i] + "}"

# Convert each JSON object to a dictionary
data = [json.loads(item) for item in data]

# Create the final JSON object
final_data = {"data": data}

# Write the final JSON object to a file
with open("fixed_data.json", "w") as file:
    json.dump(final_data, file, indent=4)
