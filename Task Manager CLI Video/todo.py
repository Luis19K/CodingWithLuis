import json
import os

# The file where tasks will be saved
DATA_FILE = "tasks.json"

def load_tasks():
    """Loads tasks from the JSON file. Returns an empty list if file doesn't exist."""
    if not os.path.exists(DATA_FILE):
        return []
    try:
        with open(DATA_FILE, 'r') as file:
            return json.load(file)
    except (json.JSONDecodeError, IOError):
        return []

def save_tasks(tasks):
    """Saves the current list of tasks to the JSON file."""
    try:
        with open(DATA_FILE, 'w') as file:
            json.dump(tasks, file, indent=4)
    except IOError as e:
        print(f"Error saving tasks: {e}")

def view_tasks(tasks):
    """Prints the list of tasks with their status."""
    print("\n--- YOUR TASKS ---")
    if not tasks:
        print("Your list is empty.")
    else:
        for index, task in enumerate(tasks):
            status = "[x]" if task['completed'] else "[ ]"
            print(f"{index + 1}. {status} {task['title']}")
    print("------------------\n")

def add_task(tasks):
    """Adds a new task."""
    title = input("Enter task description: ").strip()
    if title:
        tasks.append({"title": title, "completed": False})
        save_tasks(tasks)
        print(f"Task '{title}' added.")
    else:
        print("Task cannot be empty.")

def complete_task(tasks):
    """Marks a task as complete."""
    view_tasks(tasks)
    if not tasks: return

    try:
        task_num = int(input("Enter number to mark complete: "))
        if 1 <= task_num <= len(tasks):
            tasks[task_num - 1]['completed'] = True
            save_tasks(tasks)
            print("Task marked as complete.")
        else:
            print("Invalid task number.")
    except ValueError:
        print("Please enter a valid number.")

def delete_task(tasks):
    """Deletes a task."""
    view_tasks(tasks)
    if not tasks: return

    try:
        task_num = int(input("Enter number to delete: "))
        if 1 <= task_num <= len(tasks):
            removed = tasks.pop(task_num - 1)
            save_tasks(tasks)
            print(f"Task '{removed['title']}' deleted.")
        else:
            print("Invalid task number.")
    except ValueError:
        print("Please enter a valid number.")

def main():
    """Main application loop."""
    tasks = load_tasks()
    
    while True:
        print("\n=== TASK MANAGER ===")
        print("1. View Tasks")
        print("2. Add Task")
        print("3. Complete Task")
        print("4. Delete Task")
        print("5. Exit")
        
        choice = input("Choose an option (1-5): ")

        if choice == '1':
            view_tasks(tasks)
        elif choice == '2':
            add_task(tasks)
        elif choice == '3':
            complete_task(tasks)
        elif choice == '4':
            delete_task(tasks)
        elif choice == '5':
            print("Goodbye!")
            break
        else:
            print("Invalid choice, please try again.")

if __name__ == "__main__":
    main()
