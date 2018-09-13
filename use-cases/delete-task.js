function isSameTask(task, testTask) {
  const isExpectedUuid = task.uuid && task.uuid === testTask.uuid
  const isExpectedId = task.id && task.id === testTask.id

  return isExpectedUuid || isExpectedId
}

function removeDeletedTask(arrayOfTasks, task, deletedTask) {
  if (isSameTask(task, deletedTask)) {
    return arrayOfTasks
  }

  return [
    ...arrayOfTasks,
    task,
  ]
}

export default function deleteTask(state, deletedTask) {
  const list = Object.keys(state.list).reduce((updated, day) => {
    const newTasks = state.list[day].tasks.reduce(
      (arrayOfTasks, task) => removeDeletedTask(arrayOfTasks, task, deletedTask),
      [],
    )

    const newDuration = newTasks.reduce((total, t) => total + t.duration, 0)

    if (newTasks.length === 0) {
      return updated
    }

    return {
      ...updated,
      [day]: {
        ...state.list[day],
        duration: newDuration,
        tasks: newTasks,
      },
    }
  }, {})

  return { ...state, list }
}
