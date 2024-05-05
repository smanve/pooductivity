const taskSort = (tasks) => { 
    // Sorted by due date
    tasks.sort((a, b) => {
        if (a.due_date < b.due_date) {
          return -1;
        } else if (a.due_date > b.due_date) {
          return 1;
        } else {
          return b.priority - a.priority;
        }
    });

    let current_date = new Date();
    for (let i = 1; i < tasks.length; i++) { 
        // Update current date properly
        current_date = new Date(current_date.getTime() + tasks[i].expected_time_days * 24 * 60 * 60 * 1000);
        
        let j = i - 1;
        // Correct priority sorting logic
        let cur_task = tasks[i];
        while (j >= 0 && cur_task.priority > tasks[j].priority) { 
            // Check if due date is reachable
            if (current_date > cur_task.due_date) { 
                break;
            }
            // Swap tasks
            let temp = tasks[j];
            tasks[j] = tasks[i];
            tasks[i] = temp;
            i = j;
            j--;
        }
    }

    return tasks;
}